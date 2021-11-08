/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)==55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},vl=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(t[h],t[l],t[d],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const l=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||l==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),l!==64){const w=u<<6&192|l;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Il=function(n){const e=Wo(n);return El.encodeByteArray(e,!0)},Yo=function(n){return Il(n).replace(/\./g,"")};function Ir(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tl(t)||(n[t]=Ir(n[t],e[t]));return n}function Tl(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Yo(JSON.stringify(t)),Yo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _l(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Al(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nl(){return typeof self=="object"&&self.self===self}function Dl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xl(){return ct().indexOf("Electron/")>=0}function kl(){const n=ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Rl(){return ct().indexOf("MSAppHost/")>=0}function Ll(){return!Al()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ol(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="FirebaseError";class Tr extends Error{constructor(e,t,r){super(t);this.code=e,this.customData=r,this.name=Ml,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pl(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tr(s,a,r)}}function Pl(n,e){return n.replace(Fl,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Os(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Jo(i)&&Jo(o)){if(!Os(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Jo(n){return n!==null&&typeof n=="object"}function Vl(n,e){const t=new Ul(n,e);return t.subscribe.bind(t)}class Ul{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$l(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ms),s.error===void 0&&(s.error=Ms),s.complete===void 0&&(s.complete=Ms);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $l(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ms(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bl;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jl(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bl(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bl(n){return n===ut?void 0:n}function jl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ql(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=[];var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const Zo={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},zl=k.INFO,Gl={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Hl=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Gl[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fs{constructor(e){this.name=e,this._logLevel=zl,this._logHandler=Hl,this._userLogHandler=null,Ps.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}function Ql(n){Ps.forEach(e=>{e.setLogLevel(n)})}function Wl(n,e){for(const t of Ps){let r=null;e&&e.level&&(r=Zo[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r!=null?r:s.logLevel)&&n({level:k[i].toLowerCase(),message:a,args:o,type:s.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xl(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Xl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vs="@firebase/app",ea="0.7.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Fs("@firebase/app"),Jl="@firebase/app-compat",Zl="@firebase/analytics-compat",ed="@firebase/analytics",td="@firebase/app-check-compat",nd="@firebase/app-check",rd="@firebase/auth",sd="@firebase/auth-compat",id="@firebase/database",od="@firebase/database-compat",ad="@firebase/functions",cd="@firebase/functions-compat",ud="@firebase/installations",hd="@firebase/installations-compat",ld="@firebase/messaging",dd="@firebase/messaging-compat",fd="@firebase/performance",md="@firebase/performance-compat",gd="@firebase/remote-config",pd="@firebase/remote-config-compat",yd="@firebase/storage",wd="@firebase/storage-compat",vd="@firebase/firestore",Ed="@firebase/firestore-compat",Id="firebase",Td="9.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="[DEFAULT]",bd={[Vs]:"fire-core",[Jl]:"fire-core-compat",[ed]:"fire-analytics",[Zl]:"fire-analytics-compat",[nd]:"fire-app-check",[td]:"fire-app-check-compat",[rd]:"fire-auth",[sd]:"fire-auth-compat",[id]:"fire-rtdb",[od]:"fire-rtdb-compat",[ad]:"fire-fn",[cd]:"fire-fn-compat",[ud]:"fire-iid",[hd]:"fire-iid-compat",[ld]:"fire-fcm",[dd]:"fire-fcm-compat",[fd]:"fire-perf",[md]:"fire-perf-compat",[gd]:"fire-rc",[pd]:"fire-rc-compat",[yd]:"fire-gcs",[wd]:"fire-gcs-compat",[vd]:"fire-fst",[Ed]:"fire-fst-compat","fire-js":"fire-js",[Id]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new Map,En=new Map;function Sr(n,e){try{n.container.addComponent(e)}catch(t){Us.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ta(n,e){n.container.addOrOverwriteComponent(e)}function In(n){const e=n.name;if(En.has(e))return Us.debug(`There were multiple attempts to register component ${e}.`),!1;En.set(e,n);for(const t of je.values())Sr(t,n);return!0}function na(n,e){return n.container.getProvider(e)}function Sd(n,e,t=ht){na(n,e).clearInstance(t)}function _d(){En.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Tn=new br("app","Firebase",Ad);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=Td;function ra(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:ht,automaticDataCollectionEnabled:!1},e),r=t.name;if(typeof r!="string"||!r)throw Tn.create("bad-app-name",{appName:String(r)});const s=je.get(r);if(s){if(Os(n,s.options)&&Os(t,s.config))return s;throw Tn.create("duplicate-app",{appName:r})}const i=new Kl(r);for(const a of En.values())i.addComponent(a);const o=new Nd(n,t,i);return je.set(r,o),o}function Dd(n=ht){const e=je.get(n);if(!e)throw Tn.create("no-app",{appName:n});return e}function Cd(){return Array.from(je.values())}async function sa(n){const e=n.name;je.has(e)&&(je.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ke(n,e,t){var r;let s=(r=bd[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Us.warn(a.join(" "));return}In(new Mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function ia(n,e){if(n!==null&&typeof n!="function")throw Tn.create("invalid-log-argument");Wl(n,e)}function oa(n){Ql(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){In(new Mt("platform-logger",e=>new Yl(e),"PRIVATE")),Ke(Vs,ea,n),Ke(Vs,ea,"esm2017"),Ke("fire-js","")}xd("");var kd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:$s,_DEFAULT_ENTRY_NAME:ht,_addComponent:Sr,_addOrOverwriteComponent:ta,_apps:je,_clearComponents:_d,_components:En,_getProvider:na,_registerComponent:In,_removeServiceInstance:Sd,deleteApp:sa,getApp:Dd,getApps:Cd,initializeApp:ra,onLog:ia,registerVersion:Ke,setLogLevel:oa,FirebaseError:Tr});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t){this._delegate=e,this.firebase=t,Sr(e,new Mt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),sa(this._delegate)))}_getService(e,t=ht){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=ht){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Sr(this._delegate,e)}_addOrOverwriteComponent(e){ta(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},aa=new br("app-compat","Firebase",Ld);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:Ke,setLogLevel:oa,onLog:ia,apps:null,SDK_VERSION:$s,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:kd}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||ht,!Xo(e,u))throw aa.create("no-app",{appName:u});return e[u]}s.App=n;function i(u,h={}){const l=ra(u,h);if(Xo(e,l.name))return e[l.name];const d=new n(l,t);return e[l.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const h=u.name,l=h.replace("-compat","");if(In(u)&&u.type==="PUBLIC"){const d=(m=s())=>{if(typeof m[l]!="function")throw aa.create("invalid-app-argument",{appName:h});return m[l]()};u.serviceProps!==void 0&&Ir(d,u.serviceProps),t[l]=d,n.prototype[l]=function(...m){return this._getService.bind(this,h).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?t[l]:null}function c(u,h){return h==="serverAuth"?null:h}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){const n=Od(Rd);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:ca,extendNamespace:e,createSubscribe:Vl,ErrorFactory:br,deepExtend:Ir});function e(t){Ir(n,t)}return n}const Md=ca();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Fs("@firebase/app-compat"),Pd="@firebase/app-compat",Fd="0.1.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){Ke(Pd,Fd,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Nl()&&self.firebase!==void 0){ua.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&ua.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ha=Md;Vd();var Ud="firebase",$d="9.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ha.registerVersion(Ud,$d,"app-compat");var qd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},E,qs=qs||{},_=qd||self;function _r(){}function Bs(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function bn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Bd(n){return Object.prototype.hasOwnProperty.call(n,js)&&n[js]||(n[js]=++jd)}var js="closure_uid_"+(1e9*Math.random()>>>0),jd=0;function Kd(n,e,t){return n.call.apply(n.bind,arguments)}function zd(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ne(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ne=Kd:ne=zd,ne.apply(null,arguments)}function Ar(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function re(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ze(){this.s=this.s,this.o=this.o}var Gd=0,Hd={};ze.prototype.s=!1;ze.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Gd!=0)){var n=Bd(this);delete Hd[n]}};ze.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const la=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},da=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const r=n.length,s=typeof n=="string"?n.split(""):n;for(let i=0;i<r;i++)i in s&&e.call(t,s[i],i,n)};function Qd(n){e:{var e=$f;const t=n.length,r=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in r&&e.call(void 0,r[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function fa(n){return Array.prototype.concat.apply([],arguments)}function Ks(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Nr(n){return/^[\s\xa0]*$/.test(n)}var ma=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function fe(n,e){return n.indexOf(e)!=-1}function zs(n,e){return n<e?-1:n>e?1:0}var me;e:{var ga=_.navigator;if(ga){var pa=ga.userAgent;if(pa){me=pa;break e}}me=""}function Gs(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function ya(n){const e={};for(const t in n)e[t]=n[t];return e}var wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<wa.length;i++)t=wa[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Hs(n){return Hs[" "](n),n}Hs[" "]=_r;function Wd(n){var e=Jd;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Yd=fe(me,"Opera"),Pt=fe(me,"Trident")||fe(me,"MSIE"),Ea=fe(me,"Edge"),Qs=Ea||Pt,Ia=fe(me,"Gecko")&&!(fe(me.toLowerCase(),"webkit")&&!fe(me,"Edge"))&&!(fe(me,"Trident")||fe(me,"MSIE"))&&!fe(me,"Edge"),Xd=fe(me.toLowerCase(),"webkit")&&!fe(me,"Edge");function Ta(){var n=_.document;return n?n.documentMode:void 0}var Dr;e:{var Ws="",Ys=function(){var n=me;if(Ia)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ea)return/Edge\/([\d\.]+)/.exec(n);if(Pt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Xd)return/WebKit\/(\S+)/.exec(n);if(Yd)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ys&&(Ws=Ys?Ys[1]:""),Pt){var Xs=Ta();if(Xs!=null&&Xs>parseFloat(Ws)){Dr=String(Xs);break e}}Dr=Ws}var Jd={};function Zd(){return Wd(function(){let n=0;const e=ma(String(Dr)).split("."),t=ma("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=zs(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||zs(s[2].length==0,i[2].length==0)||zs(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var Js;if(_.document&&Pt){var ba=Ta();Js=ba||parseInt(Dr,10)||void 0}else Js=void 0;var ef=Js,tf=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{_.addEventListener("test",_r,e),_.removeEventListener("test",_r,e)}catch{}return n}();function ue(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};function Sn(n,e){if(ue.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ia){e:{try{Hs(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:nf[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Sn.Z.h.call(this)}}re(Sn,ue);var nf={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var _n="closure_listenable_"+(1e6*Math.random()|0),rf=0;function sf(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ia=s,this.key=++rf,this.ca=this.fa=!1}function Cr(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function xr(n){this.src=n,this.g={},this.h=0}xr.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=ei(n,e,r,s);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new sf(e,this.src,i,!!r,s),e.fa=t,n.push(e)),e};function Zs(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=la(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Cr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ei(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ca&&i.listener==e&&i.capture==!!t&&i.ia==r)return s}return-1}var ti="closure_lm_"+(1e6*Math.random()|0),ni={};function Sa(n,e,t,r,s){if(r&&r.once)return Aa(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sa(n,e[i],t,r,s);return null}return t=oi(t),n&&n[_n]?n.N(e,t,bn(r)?!!r.capture:!!r,s):_a(n,e,t,!1,r,s)}function _a(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=bn(s)?!!s.capture:!!s,a=si(n);if(a||(n[ti]=a=new xr(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=of(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)tf||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(Da(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function of(){function n(t){return e.call(n.src,n.listener,t)}var e=af;return n}function Aa(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Aa(n,e[i],t,r,s);return null}return t=oi(t),n&&n[_n]?n.O(e,t,bn(r)?!!r.capture:!!r,s):_a(n,e,t,!0,r,s)}function Na(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Na(n,e[i],t,r,s);else r=bn(r)?!!r.capture:!!r,t=oi(t),n&&n[_n]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=ei(i,t,r,s),-1<t&&(Cr(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=si(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ei(e,t,r,s)),(t=-1<n?e[n]:null)&&ri(t))}function ri(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[_n])Zs(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Da(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=si(e))?(Zs(t,n),t.h==0&&(t.src=null,e[ti]=null)):Cr(n)}}}function Da(n){return n in ni?ni[n]:ni[n]="on"+n}function af(n,e){if(n.ca)n=!0;else{e=new Sn(e,this);var t=n.listener,r=n.ia||n.src;n.fa&&ri(n),n=t.call(r,e)}return n}function si(n){return n=n[ti],n instanceof xr?n:null}var ii="__closure_events_fn_"+(1e9*Math.random()>>>0);function oi(n){return typeof n=="function"?n:(n[ii]||(n[ii]=function(e){return n.handleEvent(e)}),n[ii])}function W(){ze.call(this),this.i=new xr(this),this.P=this,this.I=null}re(W,ze);W.prototype[_n]=!0;W.prototype.removeEventListener=function(n,e,t,r){Na(this,n,e,t,r)};function se(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new ue(e,n);else if(e instanceof ue)e.target=e.target||n;else{var s=e;e=new ue(r,n),va(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=kr(o,r,!0,e)&&s}if(o=e.g=n,s=kr(o,r,!0,e)&&s,s=kr(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=kr(o,r,!1,e)&&s}W.prototype.M=function(){if(W.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Cr(t[r]);delete n.g[e],n.h--}}this.I=null};W.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};W.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function kr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&Zs(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ai=_.JSON.stringify;function cf(){var n=xa;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class uf{constructor(){this.h=this.g=null}add(e,t){const r=Ca.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Ca=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new hf,n=>n.reset());class hf{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function lf(n){_.setTimeout(()=>{throw n},0)}function ci(n,e){ui||df(),hi||(ui(),hi=!0),xa.add(n,e)}var ui;function df(){var n=_.Promise.resolve(void 0);ui=function(){n.then(ff)}}var hi=!1,xa=new uf;function ff(){for(var n;n=cf();){try{n.h.call(n.g)}catch(t){lf(t)}var e=Ca;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}hi=!1}function Rr(n,e){W.call(this),this.h=n||1,this.g=e||_,this.j=ne(this.kb,this),this.l=Date.now()}re(Rr,W);E=Rr.prototype;E.da=!1;E.S=null;E.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),se(this,"tick"),this.da&&(li(this),this.start()))}};E.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function li(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}E.M=function(){Rr.Z.M.call(this),li(this),delete this.g};function di(n,e,t){if(typeof n=="function")t&&(n=ne(n,t));else if(n&&typeof n.handleEvent=="function")n=ne(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(n,e||0)}function ka(n){n.g=di(()=>{n.g=null,n.i&&(n.i=!1,ka(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class mf extends ze{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ka(this)}M(){super.M(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(n){ze.call(this),this.h=n,this.g={}}re(An,ze);var Ra=[];function La(n,e,t,r){Array.isArray(t)||(t&&(Ra[0]=t.toString()),t=Ra);for(var s=0;s<t.length;s++){var i=Sa(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Oa(n){Gs(n.g,function(e,t){this.g.hasOwnProperty(t)&&ri(e)},n),n.g={}}An.prototype.M=function(){An.Z.M.call(this),Oa(this)};An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lr(){this.g=!0}Lr.prototype.Aa=function(){this.g=!1};function gf(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function pf(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Ft(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+wf(n,t)+(r?" "+r:"")})}function yf(n,e){n.info(function(){return"TIMEOUT: "+e})}Lr.prototype.info=function(){};function wf(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ai(t)}catch{return e}}var lt={},Ma=null;function Or(){return Ma=Ma||new W}lt.Ma="serverreachability";function Pa(n){ue.call(this,lt.Ma,n)}re(Pa,ue);function Nn(n){const e=Or();se(e,new Pa(e,n))}lt.STAT_EVENT="statevent";function Fa(n,e){ue.call(this,lt.STAT_EVENT,n),this.stat=e}re(Fa,ue);function ge(n){const e=Or();se(e,new Fa(e,n))}lt.Na="timingevent";function Va(n,e){ue.call(this,lt.Na,n),this.size=e}re(Va,ue);function Dn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){n()},e)}var Mr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ua={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fi(){}fi.prototype.h=null;function $a(n){return n.h||(n.h=n.i())}function qa(){}var Cn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function mi(){ue.call(this,"d")}re(mi,ue);function gi(){ue.call(this,"c")}re(gi,ue);var pi;function Pr(){}re(Pr,fi);Pr.prototype.g=function(){return new XMLHttpRequest};Pr.prototype.i=function(){return{}};pi=new Pr;function xn(n,e,t,r){this.l=n,this.j=e,this.m=t,this.X=r||1,this.V=new An(this),this.P=vf,n=Qs?125:void 0,this.W=new Rr(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ba}function Ba(){this.i=null,this.g="",this.h=!1}var vf=45e3,yi={},Fr={};E=xn.prototype;E.setTimeout=function(n){this.P=n};function wi(n,e,t){n.K=1,n.v=Br(Pe(e)),n.s=t,n.U=!0,ja(n,null)}function ja(n,e){n.F=Date.now(),kn(n),n.A=Pe(n.v);var t=n.A,r=n.X;Array.isArray(r)||(r=[String(r)]),Ja(t.h,"t",r),n.C=0,t=n.l.H,n.h=new Ba,n.g=Ic(n.l,t?e:null,!n.s),0<n.O&&(n.L=new mf(ne(n.Ia,n,n.g),n.O)),La(n.V,n.g,"readystatechange",n.gb),e=n.H?ya(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Nn(1),gf(n.j,n.u,n.A,n.m,n.X,n.s)}E.gb=function(n){n=n.target;const e=this.L;e&&Fe(n)==3?e.l():this.Ia(n)};E.Ia=function(n){try{if(n==this.g)e:{const h=Fe(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||Qs||this.g&&(this.h.h||this.g.ga()||hc(this.g)))){this.I||h!=4||e==7||(e==8||0>=l?Nn(3):Nn(2)),Vr(this);var t=this.g.ba();this.N=t;t:if(Ka(this)){var r=hc(this.g);n="";var s=r.length,i=Fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){dt(this),Rn(this);var o="";break t}this.h.i=new _.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,pf(this.j,this.u,this.A,this.m,this.X,h,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nr(a)){var u=a;break t}}u=null}if(t=u)Ft(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vi(this,t);else{this.i=!1,this.o=3,ge(12),dt(this),Rn(this);break e}}this.U?(za(this,h,o),Qs&&this.i&&h==3&&(La(this.V,this.W,"tick",this.fb),this.W.start())):(Ft(this.j,this.m,o,null),vi(this,o)),h==4&&dt(this),this.i&&!this.I&&(h==4?yc(this.l,this):(this.i=!1,kn(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ge(12)):(this.o=0,ge(13)),dt(this),Rn(this)}}}catch{}finally{}};function Ka(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function za(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=Ef(n,t),s==Fr){e==4&&(n.o=4,ge(14),r=!1),Ft(n.j,n.m,null,"[Incomplete Response]");break}else if(s==yi){n.o=4,ge(15),Ft(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Ft(n.j,n.m,s,null),vi(n,s);Ka(n)&&s!=Fr&&s!=yi&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ge(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),xi(e),e.L=!0,ge(11))):(Ft(n.j,n.m,t,"[Invalid Chunked Response]"),dt(n),Rn(n))}E.fb=function(){if(this.g){var n=Fe(this.g),e=this.g.ga();this.C<e.length&&(Vr(this),za(this,n,e),this.i&&n!=4&&kn(this))}};function Ef(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Fr:(t=Number(e.substring(t,r)),isNaN(t)?yi:(r+=1,r+t>e.length?Fr:(e=e.substr(r,t),n.C=r+t,e)))}E.cancel=function(){this.I=!0,dt(this)};function kn(n){n.Y=Date.now()+n.P,Ga(n,n.P)}function Ga(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Dn(ne(n.eb,n),e)}function Vr(n){n.B&&(_.clearTimeout(n.B),n.B=null)}E.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(yf(this.j,this.A),this.K!=2&&(Nn(3),ge(17)),dt(this),this.o=2,Rn(this)):Ga(this,this.Y-n)};function Rn(n){n.l.G==0||n.I||yc(n.l,n)}function dt(n){Vr(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,li(n.W),Oa(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function vi(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Ti(t.i,n))){if(t.I=n.N,!n.J&&Ti(t.i,n)&&t.G==3){try{var r=t.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Qr(t),Gr(t);else break e;Ci(t),ge(18)}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=Dn(ne(t.ab,t),6e3));if(1>=tc(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else gt(t,11)}else if((n.J||t.g==n)&&Qr(t),!Nr(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const h=u[3];h!=null&&(t.ma=h,t.h.info("VER="+t.ma));const l=u[4];l!=null&&(t.za=l,t.h.info("SVER="+t.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.K=r,t.h.info("backChannelRequestTimeoutMs_="+r)),r=t;const m=n.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=r.i;!i.g&&(fe(w,"spdy")||fe(w,"quic")||fe(w,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(bi(i,i.h),i.h=null))}if(r.D){const b=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,P(r.F,r.D,b))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),r=t;var o=n;if(r.oa=Ec(r,r.H?r.la:null,r.W),o.J){nc(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Vr(a),kn(a)),r.g=o}else gc(r);0<t.l.length&&Hr(t)}else u[0]!="stop"&&u[0]!="close"||gt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gt(t,7):Ni(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}Nn(4)}catch{}}function If(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(Bs(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Ei(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Bs(n)||typeof n=="string")da(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(Bs(n)||typeof n=="string"){t=[];for(var r=n.length,s=0;s<r;s++)t.push(s)}else for(s in t=[],r=0,n)t[r++]=s;r=If(n),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}}function Vt(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var r=0;r<t;r+=2)this.set(arguments[r],arguments[r+1])}else if(n)if(n instanceof Vt)for(t=n.T(),r=0;r<t.length;r++)this.set(t[r],n.get(t[r]));else for(r in n)this.set(r,n[r])}E=Vt.prototype;E.R=function(){Ii(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};E.T=function(){return Ii(this),this.g.concat()};function Ii(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var r=n.g[e];ft(n.h,r)&&(n.g[t++]=r),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)r=n.g[e],ft(s,r)||(n.g[t++]=r,s[r]=1),e++;n.g.length=t}}E.get=function(n,e){return ft(this.h,n)?this.h[n]:e};E.set=function(n,e){ft(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};E.forEach=function(n,e){for(var t=this.T(),r=0;r<t.length;r++){var s=t[r],i=this.get(s);n.call(e,i,s,this)}};function ft(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var Ha=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Tf(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mt(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof mt){this.g=e!==void 0?e:n.g,Ur(this,n.j),this.s=n.s,$r(this,n.i),qr(this,n.m),this.l=n.l,e=n.h;var t=new Mn;t.i=e.i,e.g&&(t.g=new Vt(e.g),t.h=e.h),Qa(this,t),this.o=n.o}else n&&(t=String(n).match(Ha))?(this.g=!!e,Ur(this,t[1]||"",!0),this.s=Ln(t[2]||""),$r(this,t[3]||"",!0),qr(this,t[4]),this.l=Ln(t[5]||"",!0),Qa(this,t[6]||"",!0),this.o=Ln(t[7]||"")):(this.g=!!e,this.h=new Mn(null,this.g))}mt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(On(e,Wa,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(On(e,Wa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(On(t,t.charAt(0)=="/"?Nf:Af,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",On(t,Cf)),n.join("")};function Pe(n){return new mt(n)}function Ur(n,e,t){n.j=t?Ln(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function $r(n,e,t){n.i=t?Ln(e,!0):e}function qr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Qa(n,e,t){e instanceof Mn?(n.h=e,xf(n.h,n.g)):(t||(e=On(e,Df)),n.h=new Mn(e,n.g))}function P(n,e,t){n.h.set(e,t)}function Br(n){return P(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function bf(n){return n instanceof mt?Pe(n):new mt(n,void 0)}function Sf(n,e,t,r){var s=new mt(null,void 0);return n&&Ur(s,n),e&&$r(s,e),t&&qr(s,t),r&&(s.l=r),s}function Ln(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function On(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,_f),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function _f(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Wa=/[#\/\?@]/g,Af=/[#\?:]/g,Nf=/[#\?]/g,Df=/[#\?@]/g,Cf=/#/g;function Mn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ge(n){n.g||(n.g=new Vt,n.h=0,n.i&&Tf(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}E=Mn.prototype;E.add=function(n,e){Ge(this),this.i=null,n=Ut(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Ya(n,e){Ge(n),e=Ut(n,e),ft(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,ft(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&Ii(n)))}function Xa(n,e){return Ge(n),e=Ut(n,e),ft(n.g.h,e)}E.forEach=function(n,e){Ge(this),this.g.forEach(function(t,r){da(t,function(s){n.call(e,s,r,this)},this)},this)};E.T=function(){Ge(this);for(var n=this.g.R(),e=this.g.T(),t=[],r=0;r<e.length;r++)for(var s=n[r],i=0;i<s.length;i++)t.push(e[r]);return t};E.R=function(n){Ge(this);var e=[];if(typeof n=="string")Xa(this,n)&&(e=fa(e,this.g.get(Ut(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=fa(e,n[t])}return e};E.set=function(n,e){return Ge(this),this.i=null,n=Ut(this,n),Xa(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};E.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function Ja(n,e,t){Ya(n,e),0<t.length&&(n.i=null,n.g.set(Ut(n,e),Ks(t)),n.h+=t.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var r=e[t],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),n.push(o)}}return this.i=n.join("&")};function Ut(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function xf(n,e){e&&!n.j&&(Ge(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Ya(this,r),Ja(this,s,t))},n)),n.j=e}var kf=class{constructor(n,e){this.h=n,this.g=e}};function Za(n){this.l=n||Rf,_.PerformanceNavigationTiming?(n=_.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(_.g&&_.g.Ea&&_.g.Ea()&&_.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rf=10;function ec(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function tc(n){return n.h?1:n.g?n.g.size:0}function Ti(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function bi(n,e){n.g?n.g.add(e):n.h=e}function nc(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Za.prototype.cancel=function(){if(this.i=rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function rc(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Ks(n.i)}function Si(){}Si.prototype.stringify=function(n){return _.JSON.stringify(n,void 0)};Si.prototype.parse=function(n){return _.JSON.parse(n,void 0)};function Lf(){this.g=new Si}function Of(n,e,t){const r=t||"";try{Ei(n,function(s,i){let o=s;bn(s)&&(o=ai(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Mf(n,e){const t=new Lr;if(_.Image){const r=new Image;r.onload=Ar(jr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Ar(jr,t,r,"TestLoadImage: error",!1,e),r.onabort=Ar(jr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ar(jr,t,r,"TestLoadImage: timeout",!1,e),_.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function jr(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Pn(n){this.l=n.$b||null,this.j=n.ib||!1}re(Pn,fi);Pn.prototype.g=function(){return new Kr(this.l,this.j)};Pn.prototype.i=function(n){return function(){return n}}({});function Kr(n,e){W.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=_i,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}re(Kr,W);var _i=0;E=Kr.prototype;E.open=function(n,e){if(this.readyState!=_i)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Vn(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||_).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=_i};E.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof _.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sc(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function sc(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}E.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Fn(this):Vn(this),this.readyState==3&&sc(this)}};E.Ua=function(n){this.g&&(this.response=this.responseText=n,Fn(this))};E.Ta=function(n){this.g&&(this.response=n,Fn(this))};E.ha=function(){this.g&&Fn(this)};function Fn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Vn(n)}E.setRequestHeader=function(n,e){this.v.append(n,e)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Vn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Pf=_.JSON.parse;function j(n){W.call(this),this.headers=new Vt,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ic,this.K=this.L=!1}re(j,W);var ic="",Ff=/^https?$/i,Vf=["POST","PUT"];E=j.prototype;E.ea=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pi.g(),this.C=this.u?$a(this.u):$a(pi),this.g.onreadystatechange=ne(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){oc(this,i);return}n=t||"";const s=new Vt(this.headers);r&&Ei(r,function(i,o){s.set(o,i)}),r=Qd(s.T()),t=_.FormData&&n instanceof _.FormData,!(0<=la(Vf,e))||r||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{uc(this),0<this.B&&((this.K=Uf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ne(this.pa,this)):this.A=di(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){oc(this,i)}};function Uf(n){return Pt&&Zd()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function $f(n){return n.toLowerCase()=="content-type"}E.pa=function(){typeof qs!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,se(this,"timeout"),this.abort(8))};function oc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,ac(n),zr(n)}function ac(n){n.D||(n.D=!0,se(n,"complete"),se(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,se(this,"complete"),se(this,"abort"),zr(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zr(this,!0)),j.Z.M.call(this)};E.Fa=function(){this.s||(this.F||this.v||this.l?cc(this):this.cb())};E.cb=function(){cc(this)};function cc(n){if(n.h&&typeof qs!="undefined"&&(!n.C[1]||Fe(n)!=4||n.ba()!=2)){if(n.v&&Fe(n)==4)di(n.Fa,0,n);else if(se(n,"readystatechange"),Fe(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(Ha)[1]||null;if(!s&&_.self&&_.self.location){var i=_.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ff.test(s?s.toLowerCase():"")}t=r}if(t)se(n,"complete"),se(n,"success");else{n.m=6;try{var o=2<Fe(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",ac(n)}}finally{zr(n)}}}}function zr(n,e){if(n.g){uc(n);const t=n.g,r=n.C[0]?_r:null;n.g=null,n.C=null,e||se(n,"ready");try{t.onreadystatechange=r}catch{}}}function uc(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(_.clearTimeout(n.A),n.A=null)}function Fe(n){return n.g?n.g.readyState:0}E.ba=function(){try{return 2<Fe(this)?this.g.status:-1}catch{return-1}};E.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Pf(e)}};function hc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case ic:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}E.Da=function(){return this.m};E.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function qf(n){let e="";return Gs(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Ai(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=qf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):P(n,e,t))}function Un(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function lc(n){this.za=0,this.l=[],this.h=new Lr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Un("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Un("baseRetryDelayMs",5e3,n),this.$a=Un("retryDelaySeedMs",1e4,n),this.Ya=Un("forwardChannelMaxRetries",2,n),this.ra=Un("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new Za(n&&n.concurrentRequestLimit),this.Ca=new Lf,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}E=lc.prototype;E.ma=8;E.G=1;function Ni(n){if(dc(n),n.G==3){var e=n.V++,t=Pe(n.F);P(t,"SID",n.J),P(t,"RID",e),P(t,"TYPE","terminate"),$n(n,t),e=new xn(n,n.h,e,void 0),e.K=2,e.v=Br(Pe(t)),t=!1,_.navigator&&_.navigator.sendBeacon&&(t=_.navigator.sendBeacon(e.v.toString(),"")),!t&&_.Image&&(new Image().src=e.v,t=!0),t||(e.g=Ic(e.l,null),e.g.ea(e.v)),e.F=Date.now(),kn(e)}vc(n)}E.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Gr(n){n.g&&(xi(n),n.g.cancel(),n.g=null)}function dc(n){Gr(n),n.u&&(_.clearTimeout(n.u),n.u=null),Qr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&_.clearTimeout(n.m),n.m=null)}function Di(n,e){n.l.push(new kf(n.Za++,e)),n.G==3&&Hr(n)}function Hr(n){ec(n.i)||n.m||(n.m=!0,ci(n.Ha,n),n.C=0)}function Bf(n,e){return tc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=Dn(ne(n.Ha,n,e),wc(n,n.C)),n.C++,!0)}E.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new xn(this,this.h,n,void 0);let i=this.s;if(this.P&&(i?(i=ya(i),va(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var r=this.l[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=mc(this,s,e),t=Pe(this.F),P(t,"RID",n),P(t,"CVER",22),this.D&&P(t,"X-HTTP-Session-Id",this.D),$n(this,t),this.o&&i&&Ai(t,this.o,i),bi(this.i,s),this.Ra&&P(t,"TYPE","init"),this.ja?(P(t,"$req",e),P(t,"SID","null"),s.$=!0,wi(s,t,null)):wi(s,t,e),this.G=2}}else this.G==3&&(n?fc(this,n):this.l.length==0||ec(this.i)||fc(this))};function fc(n,e){var t;e?t=e.m:t=n.V++;const r=Pe(n.F);P(r,"SID",n.J),P(r,"RID",t),P(r,"AID",n.U),$n(n,r),n.o&&n.s&&Ai(r,n.o,n.s),t=new xn(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=mc(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),bi(n.i,t),wi(t,r,e)}function $n(n,e){n.j&&Ei({},function(t,r){P(e,r,t)})}function mc(n,e,t){t=Math.min(n.l.length,t);var r=n.j?ne(n.j.Oa,n.j,n):null;e:{var s=n.l;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const h=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{Of(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,r}function gc(n){n.g||n.u||(n.Y=1,ci(n.Ga,n),n.A=0)}function Ci(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=Dn(ne(n.Ga,n),wc(n,n.A)),n.A++,!0)}E.Ga=function(){if(this.u=null,pc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=Dn(ne(this.bb,this),n)}};E.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ge(10),Gr(this),pc(this))};function xi(n){n.B!=null&&(_.clearTimeout(n.B),n.B=null)}function pc(n){n.g=new xn(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=Pe(n.oa);P(e,"RID","rpc"),P(e,"SID",n.J),P(e,"CI",n.N?"0":"1"),P(e,"AID",n.U),$n(n,e),P(e,"TYPE","xmlhttp"),n.o&&n.s&&Ai(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=Br(Pe(e)),t.s=null,t.U=!0,ja(t,n)}E.ab=function(){this.v!=null&&(this.v=null,Gr(this),Ci(this),ge(19))};function Qr(n){n.v!=null&&(_.clearTimeout(n.v),n.v=null)}function yc(n,e){var t=null;if(n.g==e){Qr(n),xi(n),n.g=null;var r=2}else if(Ti(n.i,e))t=e.D,nc(n.i,e),r=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=Or(),se(r,new Va(r,t,e,s)),Hr(n)}else gc(n);else if(s=e.o,s==3||s==0&&0<n.I||!(r==1&&Bf(n,e)||r==2&&Ci(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:gt(n,5);break;case 4:gt(n,10);break;case 3:gt(n,6);break;default:gt(n,2)}}}function wc(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function gt(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var r=ne(n.jb,n);t||(t=new mt("//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||Ur(t,"https"),Br(t)),Mf(t.toString(),r)}else ge(2);n.G=0,n.j&&n.j.va(e),vc(n),dc(n)}E.jb=function(n){n?(this.h.info("Successfully pinged google.com"),ge(2)):(this.h.info("Failed to ping google.com"),ge(1))};function vc(n){n.G=0,n.I=-1,n.j&&((rc(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Ks(n.l),n.l.length=0),n.j.ua())}function Ec(n,e,t){let r=bf(t);if(r.i!="")e&&$r(r,e+"."+r.i),qr(r,r.m);else{const s=_.location;r=Sf(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&Gs(n.aa,function(s,i){P(r,i,s)}),e=n.D,t=n.sa,e&&t&&P(r,e,t),P(r,"VER",n.ma),$n(n,r),r}function Ic(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new j(new Pn({ib:!0})):new j(n.qa),e.L=n.H,e}function Tc(){}E=Tc.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Oa=function(){};function Wr(){if(Pt&&!(10<=Number(ef)))throw Error("Environmental error: no available transport.")}Wr.prototype.g=function(n,e){return new Te(n,e)};function Te(n,e){W.call(this),this.g=new lc(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Nr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nr(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new $t(this)}re(Te,W);Te.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),ci(ne(n.hb,n,e))),ge(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=Ec(n,null,n.W),Hr(n)};Te.prototype.close=function(){Ni(this.g)};Te.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,Di(this.g,e)}else this.v?(e={},e.__data__=ai(n),Di(this.g,e)):Di(this.g,n)};Te.prototype.M=function(){this.g.j=null,delete this.j,Ni(this.g),delete this.g,Te.Z.M.call(this)};function bc(n){mi.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}re(bc,mi);function Sc(){gi.call(this),this.status=1}re(Sc,gi);function $t(n){this.g=n}re($t,Tc);$t.prototype.xa=function(){se(this.g,"a")};$t.prototype.wa=function(n){se(this.g,new bc(n))};$t.prototype.va=function(n){se(this.g,new Sc(n))};$t.prototype.ua=function(){se(this.g,"b")};Wr.prototype.createWebChannel=Wr.prototype.g;Te.prototype.send=Te.prototype.u;Te.prototype.open=Te.prototype.m;Te.prototype.close=Te.prototype.close;Mr.NO_ERROR=0;Mr.TIMEOUT=8;Mr.HTTP_ERROR=6;Ua.COMPLETE="complete";qa.EventType=Cn;Cn.OPEN="a";Cn.CLOSE="b";Cn.ERROR="c";Cn.MESSAGE="d";W.prototype.listen=W.prototype.N;j.prototype.listenOnce=j.prototype.O;j.prototype.getLastError=j.prototype.La;j.prototype.getLastErrorCode=j.prototype.Da;j.prototype.getStatus=j.prototype.ba;j.prototype.getResponseJson=j.prototype.Qa;j.prototype.getResponseText=j.prototype.ga;j.prototype.send=j.prototype.ea;var jf=function(){return new Wr},Kf=function(){return Or()},ki=Mr,zf=Ua,Gf=lt,_c={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Hf=Pn,Yr=qa,Qf=j;const Ac="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt="9.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Fs("@firebase/firestore");function Ri(){return He.logLevel}function Wf(n){He.setLogLevel(n)}function y(n,...e){if(He.logLevel<=k.DEBUG){const t=e.map(Li);He.debug(`Firestore (${qt}): ${n}`,...t)}}function K(n,...e){if(He.logLevel<=k.ERROR){const t=e.map(Li);He.error(`Firestore (${qt}): ${n}`,...t)}}function qn(n,...e){if(He.logLevel<=k.WARN){const t=e.map(Li);He.warn(`Firestore (${qt}): ${n}`,...t)}}function Li(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(n="Unexpected state"){const e=`FIRESTORE (${qt}) INTERNAL ASSERTION FAILED: `+n;throw K(e),new Error(e)}function S(n,e){n||T()}function Yf(n,e){n||T()}function v(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class Xf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ie.UNAUTHENTICATED))}shutdown(){}}class Jf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Zf{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Y;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Y,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{y("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Y)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(y("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new Nc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new ie(e)}}class em{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=ie.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class tm{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new em(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.g(r),this.p=r=>t.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be.T=-1;class Dc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function Bt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Cc(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new X(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new X(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,r){t===void 0?t=0:t>e.length&&T(),r===void 0?r=e.length-t:r>e.length-t&&T(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class R extends Bn{construct(e,t,r){return new R(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new p(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new R(t)}static emptyPath(){return new R([])}}const rm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Bn{construct(e,t,r){return new oe(e,t,r)}static isValidIdentifier(e){return rm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new p(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new p(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new p(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(t)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(oe.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new J(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new J(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");const im=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qe(n){if(S(!!n),typeof n=="string"){let e=0;const t=im.exec(n);if(S(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:z(n.seconds),nanos:z(n.nanos)}}function z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kt(n){return typeof n=="string"?J.fromBase64String(n):J.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Rc(n){const e=n.mapValue.fields.__previous_value__;return Oi(e)?Rc(e):e}function jn(n){const e=Qe(n.mapValue.fields.__local_write_time__.timestampValue);return new X(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n){return n==null}function Xr(n){return n===0&&1/n==-1/0}function Lc(n){return typeof n=="number"&&Number.isInteger(n)&&!Xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(R.fromString(e))}static fromName(e){return new I(R.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return R.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new R(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oi(n)?4:10:T()}function ke(n,e){const t=wt(n);if(t!==wt(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jn(n).isEqual(jn(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Qe(r.timestampValue),o=Qe(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return Kt(r.bytesValue).isEqual(Kt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return z(r.geoPointValue.latitude)===z(s.geoPointValue.latitude)&&z(r.geoPointValue.longitude)===z(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return z(r.integerValue)===z(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=z(r.doubleValue),o=z(s.doubleValue);return i===o?Xr(i)===Xr(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Bt(n.arrayValue.values||[],e.arrayValue.values||[],ke);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(xc(i)!==xc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ke(i[a],o[a])))return!1;return!0}(n,e);default:return T()}}function Kn(n,e){return(n.values||[]).find(t=>ke(t,e))!==void 0}function zt(n,e){const t=wt(n),r=wt(e);if(t!==r)return N(t,r);switch(t){case 0:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=z(s.integerValue||s.doubleValue),a=z(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Oc(n.timestampValue,e.timestampValue);case 4:return Oc(jn(n),jn(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(s,i){const o=Kt(s),a=Kt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=N(z(s.latitude),z(i.latitude));return o!==0?o:N(z(s.longitude),z(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=zt(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=N(a[h],u[h]);if(l!==0)return l;const d=zt(o[a[h]],c[u[h]]);if(d!==0)return d}return N(a.length,u.length)}(n.mapValue,e.mapValue);default:throw T()}}function Oc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Qe(n),r=Qe(e),s=N(t.seconds,r.seconds);return s!==0?s:N(t.nanos,r.nanos)}function Mi(n){return Pi(n)}function Pi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=Qe(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Kt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Pi(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Pi(r.fields[a])}`;return i+"}"}(n.mapValue):T();var e,t}function Jr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fi(n){return!!n&&"integerValue"in n}function Vi(n){return!!n&&"arrayValue"in n}function Mc(n){return!!n&&"nullValue"in n}function Pc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zr(n){return!!n&&"mapValue"in n}function zn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return pt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=zn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zn(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.value=e}static empty(){return new he({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zn(t)}setAll(e){let t=oe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=zn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Zr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Zr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){pt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new he(zn(this.value))}}function Fc(n){const e=[];return pt(n.fields,(t,r)=>{const s=new oe([t]);if(Zr(r)){const i=Fc(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t,r,s,i){this.key=e,this.documentType=t,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new F(e,0,A.min(),he.empty(),0)}static newFoundDocument(e,t,r){return new F(e,1,t,r,0)}static newNoDocument(e,t){return new F(e,2,t,he.empty(),0)}static newUnknownDocument(e,t){return new F(e,3,t,he.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=he.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=he.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof F&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new F(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function Vc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new om(n,e,t,r,s,i,o)}function Gn(n){const e=v(n);if(e.A===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>cm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=ns(e.startAt)),e.endAt&&(t+="|ub:",t+=ns(e.endAt)),e.A=t}return e.A}function am(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(r=t).field.canonicalString()} ${r.op} ${Mi(r.value)}`;var r}).join(", ")}]`),yt(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: "+ns(n.startAt)),n.endAt&&(e+=", endAt: "+ns(n.endAt)),`Target(${e})`}function es(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!pm(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],r=e.filters[s],t.op!==r.op||!t.field.isEqual(r.field)||!ke(t.value,r.value))return!1;var t,r;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!qc(n.startAt,e.startAt)&&qc(n.endAt,e.endAt)}function ts(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class pe extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.R(e,t,r):new um(e,t,r):t==="array-contains"?new dm(e,r):t==="in"?new fm(e,r):t==="not-in"?new mm(e,r):t==="array-contains-any"?new gm(e,r):new pe(e,t,r)}static R(e,t,r){return t==="in"?new hm(e,r):new lm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.P(zt(t,this.value)):t!==null&&wt(this.value)===wt(t)&&this.P(zt(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function cm(n){return n.field.canonicalString()+n.op.toString()+Mi(n.value)}class um extends pe{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.P(t)}}class hm extends pe{constructor(e,t){super(e,"in",t),this.keys=Uc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lm extends pe{constructor(e,t){super(e,"not-in",t),this.keys=Uc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Uc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class dm extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vi(t)&&Kn(t.arrayValue,this.value)}}class fm extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Kn(this.value.arrayValue,t)}}class mm extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Kn(this.value.arrayValue,t)}}class gm extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Kn(this.value.arrayValue,r))}}class Hn{constructor(e,t){this.position=e,this.before=t}}function ns(n){return`${n.before?"b":"a"}:${n.position.map(e=>Mi(e)).join(",")}`}class Gt{constructor(e,t="asc"){this.field=e,this.dir=t}}function pm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function $c(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=zt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return n.before?r<=0:r<0}function qc(n,e){if(n===null)return e===null;if(e===null||n.before!==e.before||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function Bc(n,e,t,r,s,i,o,a){return new Ve(n,e,t,r,s,i,o,a)}function Ht(n){return new Ve(n)}function rs(n){return!yt(n.limit)&&n.limitType==="F"}function ss(n){return!yt(n.limit)&&n.limitType==="L"}function Ui(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function $i(n){for(const e of n.filters)if(e.v())return e.field;return null}function qi(n){return n.collectionGroup!==null}function Qt(n){const e=v(n);if(e.V===null){e.V=[];const t=$i(e),r=Ui(e);if(t!==null&&r===null)t.isKeyField()||e.V.push(new Gt(t)),e.V.push(new Gt(oe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Gt(oe.keyField(),i))}}}return e.V}function Ae(n){const e=v(n);if(!e.S)if(e.limitType==="F")e.S=Vc(e.path,e.collectionGroup,Qt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Qt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Gt(i.field,o))}const r=e.endAt?new Hn(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Hn(e.startAt.position,!e.startAt.before):null;e.S=Vc(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.S}function jc(n,e,t){return new Ve(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qn(n,e){return es(Ae(n),Ae(e))&&n.limitType===e.limitType}function Kc(n){return`${Gn(Ae(n))}|lt:${n.limitType}`}function Bi(n){return`Query(target=${am(Ae(n))}; limitType=${n.limitType})`}function Wn(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):I.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!$c(t.startAt,Qt(t),r)||t.endAt&&$c(t.endAt,Qt(t),r))}(n,e)}function zc(n){return(e,t)=>{let r=!1;for(const s of Qt(n)){const i=ym(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ym(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?zt(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,e){if(n.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(e)?"-0":e}}function Hc(n){return{integerValue:""+n}}function Qc(n,e){return Lc(e)?Hc(e):Gc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this._=void 0}}function wm(n,e,t){return n instanceof Wt?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof vt?Yc(n,e):n instanceof Et?Xc(n,e):function(r,s){const i=Wc(r,s),o=Jc(i)+Jc(r.C);return Fi(i)&&Fi(r.C)?Hc(o):Gc(r.N,o)}(n,e)}function vm(n,e,t){return n instanceof vt?Yc(n,e):n instanceof Et?Xc(n,e):t}function Wc(n,e){return n instanceof Yt?Fi(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Wt extends is{}class vt extends is{constructor(e){super(),this.elements=e}}function Yc(n,e){const t=Zc(e);for(const r of n.elements)t.some(s=>ke(s,r))||t.push(r);return{arrayValue:{values:t}}}class Et extends is{constructor(e){super(),this.elements=e}}function Xc(n,e){let t=Zc(e);for(const r of n.elements)t=t.filter(s=>!ke(s,r));return{arrayValue:{values:t}}}class Yt extends is{constructor(e,t){super(),this.N=e,this.C=t}}function Jc(n){return z(n.integerValue||n.doubleValue)}function Zc(n){return Vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){this.field=e,this.transform=t}}function Em(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof vt&&r instanceof vt||t instanceof Et&&r instanceof Et?Bt(t.elements,r.elements,ke):t instanceof Yt&&r instanceof Yt?ke(t.C,r.C):t instanceof Wt&&r instanceof Wt}(n.transform,e.transform)}class Im{constructor(e,t){this.version=e,this.transformResults=t}}class G{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new G}static exists(e){return new G(void 0,e)}static updateTime(e){return new G(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function os(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class as{}function Tm(n,e,t){n instanceof Xn?function(r,s,i){const o=r.value.clone(),a=ru(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof We?function(r,s,i){if(!os(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=ru(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(nu(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function ji(n,e,t){n instanceof Xn?function(r,s,i){if(!os(r.precondition,s))return;const o=r.value.clone(),a=su(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(tu(s),o).setHasLocalMutations()}(n,e,t):n instanceof We?function(r,s,i){if(!os(r.precondition,s))return;const o=su(r.fieldTransforms,i,s),a=s.data;a.setAll(nu(r)),a.setAll(o),s.convertToFoundDocument(tu(s),a).setHasLocalMutations()}(n,e,t):function(r,s){os(r.precondition,s)&&s.convertToNoDocument(A.min())}(n,e)}function bm(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Wc(r.transform,s||null);i!=null&&(t==null&&(t=he.empty()),t.set(r.field,i))}return t||null}function eu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Bt(t,r,(s,i)=>Em(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function tu(n){return n.isFoundDocument()?n.version:A.min()}class Xn extends as{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}}class We extends as{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function nu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ru(n,e,t){const r=new Map;S(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,vm(o,a,t[s]))}return r}function su(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,wm(i,o,e))}return r}class Jn extends as{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ki extends as{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H,C;function iu(n){switch(n){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ou(n){if(n===void 0)return K("GRPC error has no .code"),f.UNKNOWN;switch(n){case H.OK:return f.OK;case H.CANCELLED:return f.CANCELLED;case H.UNKNOWN:return f.UNKNOWN;case H.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case H.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case H.INTERNAL:return f.INTERNAL;case H.UNAVAILABLE:return f.UNAVAILABLE;case H.UNAUTHENTICATED:return f.UNAUTHENTICATED;case H.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case H.NOT_FOUND:return f.NOT_FOUND;case H.ALREADY_EXISTS:return f.ALREADY_EXISTS;case H.PERMISSION_DENIED:return f.PERMISSION_DENIED;case H.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case H.ABORTED:return f.ABORTED;case H.OUT_OF_RANGE:return f.OUT_OF_RANGE;case H.UNIMPLEMENTED:return f.UNIMPLEMENTED;case H.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(C=H||(H={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new Q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cs(this.root,e,this.comparator,!1)}getReverseIterator(){return new cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cs(this.root,e,this.comparator,!0)}}class cs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r!=null?r:ae.RED,this.left=s!=null?s:ae.EMPTY,this.right=i!=null?i:ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ae(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,r,s){return this}insert(n,e,t){return new ae(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new au(this.data.getIterator())}getIteratorFrom(e){return new au(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof V)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new V(this.comparator);return t.data=e,t}}class au{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Q(I.comparator);function Ne(){return _m}const Am=new Q(I.comparator);function zi(){return Am}const Nm=new Q(I.comparator);function cu(){return Nm}const Dm=new V(I.comparator);function L(...n){let e=Dm;for(const t of n)e=e.add(t);return e}const Cm=new V(N);function us(){return Cm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const r=new Map;return r.set(e,er.createSynthesizedTargetChangeForCurrentChange(e,t)),new Zn(A.min(),r,us(),Ne(),L())}}class er{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new er(J.EMPTY_BYTE_STRING,t,L(),L(),L())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,r,s){this.k=e,this.removedTargetIds=t,this.key=r,this.$=s}}class uu{constructor(e,t){this.targetId=e,this.O=t}}class hu{constructor(e,t,r=J.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class lu{constructor(){this.F=0,this.M=fu(),this.L=J.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=L(),t=L(),r=L();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:T()}}),new er(this.L,this.B,e,t,r)}G(){this.U=!1,this.M=fu()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class xm{constructor(e){this.tt=e,this.et=new Map,this.nt=Ne(),this.st=du(),this.it=new V(N)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.ct(t,e.key,e.$);for(const t of e.removedTargetIds)this.ct(t,e.key,e.$)}at(e){this.forEachTarget(e,t=>{const r=this.ut(t);switch(e.state){case 0:this.ht(t)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(t);break;case 3:this.ht(t)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),r.j(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((r,s)=>{this.ht(s)&&t(s)})}ft(e){const t=e.targetId,r=e.O.count,s=this.dt(t);if(s){const i=s.target;if(ts(i))if(r===0){const o=new I(i.path);this.ct(t,o,F.newNoDocument(o,A.min()))}else S(r===1);else this.wt(t)!==r&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&ts(a.target)){const c=new I(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,F.newNoDocument(c,e))}i.K&&(t.set(o,i.W()),i.G())}});let r=L();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.dt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new Zn(e,t,this.it,this.nt,r);return this.nt=Ne(),this.st=du(),this.it=new V(N),s}ot(e,t){if(!this.ht(e))return;const r=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,r),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}ct(e,t,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,t)?s.H(t,1):s.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),r&&(this.nt=this.nt.insert(t,r))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new lu,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new V(N),this.st=this.st.insert(e,t)),t}ht(e){const t=this.dt(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new lu),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function du(){return new Q(I.comparator)}function fu(){return new Q(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Lm{constructor(e,t){this.databaseId=e,this.D=t}}function tr(n,e){return n.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mu(n,e){return n.D?e.toBase64():e.toUint8Array()}function Om(n,e){return tr(n,e.toTimestamp())}function Z(n){return S(!!n),A.fromTimestamp(function(e){const t=Qe(e);return new X(t.seconds,t.nanos)}(n))}function Gi(n,e){return function(t){return new R(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function gu(n){const e=R.fromString(n);return S(Nu(e)),e}function nr(n,e){return Gi(n.databaseId,e.path)}function Re(n,e){const t=gu(e);if(t.get(1)!==n.databaseId.projectId)throw new p(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(yu(t))}function Hi(n,e){return Gi(n.databaseId,e)}function pu(n){const e=gu(n);return e.length===4?R.emptyPath():yu(e)}function rr(n){return new R(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yu(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wu(n,e,t){return{name:nr(n,e),fields:t.value.mapValue.fields}}function vu(n,e,t){const r=Re(n,e.name),s=Z(e.updateTime),i=new he({mapValue:{fields:e.fields}}),o=F.newFoundDocument(r,s,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function Mm(n,e){return"found"in e?function(t,r){S(!!r.found),r.found.name,r.found.updateTime;const s=Re(t,r.found.name),i=Z(r.found.updateTime),o=new he({mapValue:{fields:r.found.fields}});return F.newFoundDocument(s,i,o)}(n,e):"missing"in e?function(t,r){S(!!r.missing),S(!!r.readTime);const s=Re(t,r.missing),i=Z(r.readTime);return F.newNoDocument(s,i)}(n,e):T()}function Pm(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.D?(S(u===void 0||typeof u=="string"),J.fromBase64String(u||"")):(S(u===void 0||u instanceof Uint8Array),J.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:ou(c.code);return new p(u,c.message||"")}(o);t=new hu(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Re(n,r.document.name),i=Z(r.document.updateTime),o=new he({mapValue:{fields:r.document.fields}}),a=F.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];t=new hs(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Re(n,r.document),i=r.readTime?Z(r.readTime):A.min(),o=F.newNoDocument(s,i),a=r.removedTargetIds||[];t=new hs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Re(n,r.document),i=r.removedTargetIds||[];t=new hs([],i,s,null)}else{if(!("filter"in e))return T();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Sm(s),o=r.targetId;t=new uu(o,i)}}return t}function ls(n,e){let t;if(e instanceof Xn)t={update:wu(n,e.key,e.value)};else if(e instanceof Jn)t={delete:nr(n,e.key)};else if(e instanceof We)t={update:wu(n,e.key,e.data),updateMask:jm(e.fieldMask)};else{if(!(e instanceof Ki))return T();t={verify:nr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Wt)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Et)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yt)return{fieldPath:i.field.canonicalString(),increment:o.C};throw T()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Om(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(n,e.precondition)),t}function Eu(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?G.updateTime(Z(s.updateTime)):s.exists!==void 0?G.exists(s.exists):G.none()}(e.currentDocument):G.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)S(o.setToServerValue==="REQUEST_TIME"),a=new Wt;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new vt(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Et(u)}else"increment"in o?a=new Yt(i,o.increment):T();const c=oe.fromServerFormat(o.fieldPath);return new Yn(c,a)}(n,s)):[];if(e.update){e.update.name;const s=Re(n,e.update.name),i=new he({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new jt(c.map(u=>oe.fromServerFormat(u)))}(e.updateMask);return new We(s,i,o,t,r)}return new Xn(s,i,t,r)}if(e.delete){const s=Re(n,e.delete);return new Jn(s,t)}if(e.verify){const s=Re(n,e.verify);return new Ki(s,t)}return T()}function Fm(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?Z(r.updateTime):Z(s);return i.isEqual(A.min())&&(i=Z(s)),new Im(i,r.transformResults||[])}(t,e))):[]}function Iu(n,e){return{documents:[Hi(n,e.path)]}}function Tu(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Hi(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Hi(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(u=>function(h){if(h.op==="=="){if(Pc(h.value))return{unaryFilter:{field:Xt(h.field),op:"IS_NAN"}};if(Mc(h.value))return{unaryFilter:{field:Xt(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Pc(h.value))return{unaryFilter:{field:Xt(h.field),op:"IS_NOT_NAN"}};if(Mc(h.value))return{unaryFilter:{field:Xt(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(h.field),op:$m(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(t.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:Xt(u.field),direction:Um(u.dir)}}(c))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(a,c){return a.D||yt(c)?c:{value:c}}(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=_u(e.startAt)),e.endAt&&(t.structuredQuery.endAt=_u(e.endAt)),t}function bu(n){let e=pu(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){S(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=Su(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(h=>function(l){return new Gt(Jt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;t.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,yt(l)?null:l}(t.limit));let c=null;t.startAt&&(c=Au(t.startAt));let u=null;return t.endAt&&(u=Au(t.endAt)),Bc(e,s,o,i,a,"F",c,u)}function Vm(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Su(n){return n?n.unaryFilter!==void 0?[Bm(n)]:n.fieldFilter!==void 0?[qm(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Su(e)).reduce((e,t)=>e.concat(t)):T():[]}function _u(n){return{before:n.before,values:n.position}}function Au(n){const e=!!n.before,t=n.values||[];return new Hn(t,e)}function Um(n){return km[n]}function $m(n){return Rm[n]}function Xt(n){return{fieldPath:n.canonicalString()}}function Jt(n){return oe.fromServerFormat(n.fieldPath)}function qm(n){return pe.create(Jt(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}function Bm(n){switch(n.unaryFilter.op){case"IS_NAN":const e=Jt(n.unaryFilter.field);return pe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=Jt(n.unaryFilter.field);return pe.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jt(n.unaryFilter.field);return pe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Jt(n.unaryFilter.field);return pe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function jm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Nu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Du(e)),e=Km(n.get(t),e);return Du(e)}function Km(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Du(n){return n+""}function Ue(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),R.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&T(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:T()}i=o+2}return new R(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class Se{constructor(e,t,r){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=r}}Se.store="owner",Se.key="owner";class Ye{constructor(e,t,r){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=r}}Ye.store="mutationQueues",Ye.keyPath="userId";class O{constructor(e,t,r,s,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=r,this.baseMutations=s,this.mutations=i}}O.store="mutations",O.keyPath="batchId",O.userMutationsIndex="userMutationsIndex",O.userMutationsKeyPath=["userId","batchId"];class le{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Ce(t)]}static key(e,t,r){return[e,Ce(t),r]}}le.store="documentMutations",le.PLACEHOLDER=new le;class Gm{constructor(e,t){this.path=e,this.readTime=t}}class Hm{constructor(e,t){this.path=e,this.version=t}}class U{constructor(e,t,r,s,i,o){this.unknownDocument=e,this.noDocument=t,this.document=r,this.hasCommittedMutations=s,this.readTime=i,this.parentPath=o}}U.store="remoteDocuments",U.readTimeIndex="readTimeIndex",U.readTimeIndexPath="readTime",U.collectionReadTimeIndex="collectionReadTimeIndex",U.collectionReadTimeIndexPath=["parentPath","readTime"];class Le{constructor(e){this.byteSize=e}}Le.store="remoteDocumentGlobal",Le.key="remoteDocumentGlobalKey";class ve{constructor(e,t,r,s,i,o,a){this.targetId=e,this.canonicalId=t,this.readTime=r,this.resumeToken=s,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=a}}ve.store="targets",ve.keyPath="targetId",ve.queryTargetsIndexName="queryTargetsIndex",ve.queryTargetsKeyPath=["canonicalId","targetId"];class ce{constructor(e,t,r){this.targetId=e,this.path=t,this.sequenceNumber=r}}ce.store="targetDocuments",ce.keyPath=["targetId","path"],ce.documentTargetsIndex="documentTargetsIndex",ce.documentTargetsKeyPath=["path","targetId"];class _e{constructor(e,t,r,s){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=r,this.targetCount=s}}_e.key="targetGlobalKey",_e.store="targetGlobal";class It{constructor(e,t){this.collectionId=e,this.parent=t}}It.store="collectionParents",It.keyPath=["collectionId","parent"];class $e{constructor(e,t,r,s){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=r,this.inForeground=s}}$e.store="clientMetadata",$e.keyPath="clientId";class Zt{constructor(e,t,r){this.bundleId=e,this.createTime=t,this.version=r}}Zt.store="bundles",Zt.keyPath="bundleId";class en{constructor(e,t,r){this.name=e,this.readTime=t,this.bundledQuery=r}}en.store="namedQueries",en.keyPath="name";const Qm=[Ye.store,O.store,le.store,U.store,ve.store,Se.store,_e.store,ce.store,$e.store,Le.store,It.store,Zt.store,en.store],Cu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,r)=>{t(e)})}static reject(e){return new g((t,r)=>{r(e)})}static waitFor(e){return new g((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=g.resolve(!1);for(const r of e)t=t.next(s=>s?g.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Et=new Y,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{t.error?this.Et.reject(new sr(e,t.error)):this.Et.resolve()},this.transaction.onerror=r=>{const s=Qi(r.target.error);this.Et.reject(new sr(e,s))}}static open(e,t,r,s){try{return new ds(t,e.transaction(s,r))}catch(i){throw new sr(t,i)}}get It(){return this.Et.promise}abort(e){e&&this.Et.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new Ym(t)}}class xe{constructor(e,t,r){this.name=e,this.version=t,this.At=r,xe.Rt(ct())===12.2&&K("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),bt(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!Ol())return!1;if(xe.Pt())return!0;const e=ct(),t=xe.Rt(e),r=0<t&&t<10,s=xe.vt(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static vt(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Dt(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new sr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new p(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new sr(e,o))},s.onupgradeneeded=i=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.At.Ct(o,s.transaction,i.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=t=>this.Nt(t)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=ds.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).catch(u=>(a.abort(u),g.reject(u))).toPromise();return c.catch(()=>{}),await a.It,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Wm{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return bt(this.kt.delete())}}class sr extends p{constructor(e,t){super(f.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Tt(n){return n.name==="IndexedDbTransactionError"}class Ym{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(y("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),bt(r)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),bt(this.store.add(e))}get(e){return bt(this.store.get(e)).next(t=>(t===void 0&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),bt(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),bt(this.store.count())}Lt(e,t){const r=this.cursor(this.options(e,t)),s=[];return this.Bt(r,(i,o)=>{s.push(o)}).next(()=>s)}Ut(e,t){y("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.qt=!1;const s=this.cursor(r);return this.Bt(s,(i,o,a)=>a.delete())}Kt(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Bt(s,t)}jt(e){const t=this.cursor({});return new g((r,s)=>{t.onerror=i=>{const o=Qi(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Bt(e,t){const r=[];return new g((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Wm(a),u=t(a.primaryKey,a.value,c);if(u instanceof g){const h=u.catch(l=>(c.done(),g.reject(l)));r.push(h)}c.isDone?s():c.Ft===null?a.continue():a.continue(c.Ft)}}).next(()=>g.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.qt?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function bt(n){return new g((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Qi(r.target.error);t(s)}})}let ku=!1;function Qi(n){const e=xe.Rt(ct());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ku||(ku=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends xu{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function Ee(n,e){const t=v(n);return xe.St(t.Qt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Tm(i,e,r[s])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&ji(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&ji(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const r=e.get(t.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(A.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),L())}isEqual(e){return this.batchId===e.batchId&&Bt(this.mutations,e.mutations,(t,r)=>eu(t,r))&&Bt(this.baseMutations,e.baseMutations,(t,r)=>eu(t,r))}}class Yi{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){S(e.mutations.length===r.length);let s=cu();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yi(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,r,s,i=A.min(),o=A.min(),a=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.Wt=e}}function Xi(n,e){if(e.document)return vu(n.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=I.fromSegments(e.noDocument.path),r=nn(e.noDocument.readTime),s=F.newNoDocument(t,r);return e.hasCommittedMutations?s.setHasCommittedMutations():s}if(e.unknownDocument){const t=I.fromSegments(e.unknownDocument.path),r=nn(e.unknownDocument.version);return F.newUnknownDocument(t,r)}return T()}function Ou(n,e,t){const r=Ji(t),s=e.key.path.popLast().toArray();if(e.isFoundDocument()){const i=function(a,c){return{name:nr(a,c.key),fields:c.data.value.mapValue.fields,updateTime:tr(a,c.version.toTimestamp())}}(n.Wt,e),o=e.hasCommittedMutations;return new U(null,null,i,o,r,s)}if(e.isNoDocument()){const i=e.key.path.toArray(),o=tn(e.version),a=e.hasCommittedMutations;return new U(null,new Gm(i,o),null,a,r,s)}if(e.isUnknownDocument()){const i=e.key.path.toArray(),o=tn(e.version);return new U(new Hm(i,o),null,null,!0,r,s)}return T()}function Ji(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Mu(n){const e=new X(n[0],n[1]);return A.fromTimestamp(e)}function tn(n){const e=n.toTimestamp();return new zm(e.seconds,e.nanoseconds)}function nn(n){const e=new X(n.seconds,n.nanoseconds);return A.fromTimestamp(e)}function rn(n,e){const t=(e.baseMutations||[]).map(i=>Eu(n.Wt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Eu(n.Wt,i)),s=X.fromMillis(e.localWriteTimeMs);return new Wi(e.batchId,s,t,r)}function ir(n){const e=nn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?nn(n.lastLimboFreeSnapshotVersion):A.min();let r;var s;return n.query.documents!==void 0?(S((s=n.query).documents.length===1),r=Ae(Ht(pu(s.documents[0])))):r=function(i){return Ae(bu(i))}(n.query),new Xe(r,n.targetId,0,n.lastListenSequenceNumber,e,t,J.fromBase64String(n.resumeToken))}function Pu(n,e){const t=tn(e.snapshotVersion),r=tn(e.lastLimboFreeSnapshotVersion);let s;s=ts(e.target)?Iu(n.Wt,e.target):Tu(n.Wt,e.target);const i=e.resumeToken.toBase64();return new ve(e.targetId,Gn(e.target),t,i,e.sequenceNumber,r,s)}function Zi(n){const e=bu({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{getBundleMetadata(e,t){return Fu(e).get(t).next(r=>{if(r)return{id:(s=r).bundleId,createTime:nn(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return Fu(e).put({bundleId:(r=t).id,createTime:tn(Z(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Vu(e).get(t).next(r=>{if(r)return{name:(s=r).name,query:Zi(s.bundledQuery),readTime:nn(s.readTime)};var s})}saveNamedQuery(e,t){return Vu(e).put(function(r){return{name:r.name,readTime:tn(Z(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Fu(n){return Ee(n,Zt.store)}function Vu(n){return Ee(n,en.store)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.Gt=new eo}addToCollectionParentIndex(e,t){return this.Gt.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.Gt.getEntries(t))}}class eo{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new V(R.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new V(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.zt=new eo}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.zt.add(t)});const i={collectionId:r,parent:Ce(s)};return Uu(e).put(i)}return g.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Cc(t),""],!1,!0);return Uu(e).Lt(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Ue(o.parent))}return r})}}function Uu(n){return Ee(n,It.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ie{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ie(e,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n,e,t){const r=n.store(O.store),s=n.store(le.store),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Kt({range:o},(h,l,d)=>(a++,d.delete()));i.push(c.next(()=>{S(a===1)}));const u=[];for(const h of t.mutations){const l=le.key(e,h.key.path,t.batchId);i.push(s.delete(l)),u.push(h.key)}return g.waitFor(i).next(()=>u)}function fs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw T();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie.DEFAULT_COLLECTION_PERCENTILE=10,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ie.DEFAULT=new Ie(41943040,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ie.DISABLED=new Ie(-1,0,0);class to{constructor(e,t,r,s){this.userId=e,this.N=t,this.Ht=r,this.referenceDelegate=s,this.Jt={}}static Yt(e,t,r,s){S(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new to(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Je(e).Kt({index:O.userMutationsIndex,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=sn(e),o=Je(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new Wi(a,t,r,s),u=function(d,m,w){const b=w.baseMutations.map(q=>ls(d.Wt,q)),D=w.mutations.map(q=>ls(d.Wt,q));return new O(m,w.batchId,w.localWriteTime.toMillis(),b,D)}(this.N,this.userId,c),h=[];let l=new V((d,m)=>N(d.canonicalString(),m.canonicalString()));for(const d of s){const m=le.key(this.userId,d.key.path,a);l=l.add(d.key.path.popLast()),h.push(o.put(u)),h.push(i.put(m,le.PLACEHOLDER))}return l.forEach(d=>{h.push(this.Ht.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Jt[a]=c.keys()}),g.waitFor(h).next(()=>c)})}lookupMutationBatch(e,t){return Je(e).get(t).next(r=>r?(S(r.userId===this.userId),rn(this.N,r)):null)}Xt(e,t){return this.Jt[t]?g.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Jt[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Je(e).Kt({index:O.userMutationsIndex,range:s},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=r),i=rn(this.N,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Je(e).Kt({index:O.userMutationsIndex,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Je(e).Lt(O.userMutationsIndex,t).next(r=>r.map(s=>rn(this.N,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=le.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return sn(e).Kt({range:s},(o,a,c)=>{const[u,h,l]=o,d=Ue(h);if(u===this.userId&&t.path.isEqual(d))return Je(e).get(l).next(m=>{if(!m)throw T();S(m.userId===this.userId),i.push(rn(this.N,m))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new V(N);const s=[];return t.forEach(i=>{const o=le.prefixForPath(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=sn(e).Kt({range:a},(u,h,l)=>{const[d,m,w]=u,b=Ue(m);d===this.userId&&i.path.isEqual(b)?r=r.add(w):l.done()});s.push(c)}),g.waitFor(s).next(()=>this.Zt(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=le.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new V(N);return sn(e).Kt({range:o},(c,u,h)=>{const[l,d,m]=c,w=Ue(d);l===this.userId&&r.isPrefixOf(w)?w.length===s&&(a=a.add(m)):h.done()}).next(()=>this.Zt(e,a))}Zt(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Je(e).get(i).next(o=>{if(o===null)throw T();S(o.userId===this.userId),r.push(rn(this.N,o))}))}),g.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return qu(e.Qt,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.te(t.batchId)}),g.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return g.resolve();const r=IDBKeyRange.lowerBound(le.prefixForUser(this.userId)),s=[];return sn(e).Kt({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=Ue(i[1]);s.push(c)}else a.done()}).next(()=>{S(s.length===0)})})}containsKey(e,t){return Bu(e,this.userId,t)}ee(e){return ju(e).get(this.userId).next(t=>t||new Ye(this.userId,-1,""))}}function Bu(n,e,t){const r=le.prefixForPath(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return sn(n).Kt({range:i,qt:!0},(a,c,u)=>{const[h,l,d]=a;h===e&&l===s&&(o=!0),u.done()}).next(()=>o)}function Je(n){return Ee(n,O.store)}function sn(n){return Ee(n,le.store)}function ju(n){return Ee(n,Ye.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new St(0)}static ie(){return new St(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next(t=>{const r=new St(t.highestTargetId);return t.highestTargetId=r.next(),this.oe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(t=>A.fromTimestamp(new X(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.re(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.oe(e,s)))}addTargetData(e,t){return this.ce(e,t).next(()=>this.re(e).next(r=>(r.targetCount+=1,this.ae(t,r),this.oe(e,r))))}updateTargetData(e,t){return this.ce(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>on(e).delete(t.targetId)).next(()=>this.re(e)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.oe(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return on(e).Kt((o,a)=>{const c=ir(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>g.waitFor(i)).next(()=>s)}forEachTarget(e,t){return on(e).Kt((r,s)=>{const i=ir(s);t(i)})}re(e){return Ku(e).get(_e.key).next(t=>(S(t!==null),t))}oe(e,t){return Ku(e).put(_e.key,t)}ce(e,t){return on(e).put(Pu(this.N,t))}ae(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.re(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Gn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return on(e).Kt({range:s,index:ve.queryTargetsIndexName},(o,a,c)=>{const u=ir(a);es(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Ze(e);return t.forEach(o=>{const a=Ce(o.path);s.push(i.put(new ce(r,a))),s.push(this.referenceDelegate.addReference(e,r,o))}),g.waitFor(s)}removeMatchingKeys(e,t,r){const s=Ze(e);return g.forEach(t,i=>{const o=Ce(i.path);return g.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Ze(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Ze(e);let i=L();return s.Kt({range:r,qt:!0},(o,a,c)=>{const u=Ue(o[1]),h=new I(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=Ce(t.path),s=IDBKeyRange.bound([r],[Cc(r)],!1,!0);let i=0;return Ze(e).Kt({index:ce.documentTargetsIndex,qt:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Tt(e,t){return on(e).get(t).next(r=>r?ir(r):null)}}function on(n){return Ee(n,ve.store)}function Ku(n){return Ee(n,_e.store)}function Ze(n){return Ee(n,ce.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==Cu)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu([n,e],[t,r]){const s=N(n,t);return s===0?N(e,r):s}class tg{constructor(e){this.ue=e,this.buffer=new V(zu),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();zu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ng{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const t=this.de?3e5:6e4;y("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){Tt(r)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await _t(r)}await this._e(e)})}}class rg{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return g.resolve(be.T);const r=new tg(t);return this.me.forEachTarget(e,s=>r.fe(s.sequenceNumber)).next(()=>this.me.ye(e,s=>r.fe(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.me.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(y("LruGarbageCollector","Garbage collection skipped; disabled"),g.resolve($u)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$u):this.pe(e,t))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(l=>(l>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${l}`),s=this.params.maximumSequenceNumbersToCollect):s=l,o=Date.now(),this.nthSequenceNumber(e,s))).next(l=>(r=l,a=Date.now(),this.removeTargets(e,r,t))).next(l=>(i=l,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(l=>(u=Date.now(),Ri()<=k.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${l} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),g.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:l})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t){this.db=e,this.garbageCollector=function(r,s){return new rg(r,s)}(this,t)}ge(e){const t=this.Te(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Te(e){let t=0;return this.ye(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Ee(e,(r,s)=>t(s))}addReference(e,t,r){return ms(e,r)}removeReference(e,t,r){return ms(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ms(e,t)}Ie(e,t){return function(r,s){let i=!1;return ju(r).jt(o=>Bu(r,o,s).next(a=>(a&&(i=!0),g.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Ee(e,(o,a)=>{if(a<=t){const c=this.Ie(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o),Ze(e).delete([0,Ce(o.path)])))});s.push(c)}}).next(()=>g.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ms(e,t)}Ee(e,t){const r=Ze(e);let s,i=be.T;return r.Kt({index:ce.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==be.T&&t(new I(Ue(s)),i),i=u,s=c):i=be.T}).next(()=>{i!==be.T&&t(new I(Ue(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ms(n,e){return Ze(n).put(function(t,r){return new ce(0,Ce(t.path),r)}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t])}else this.inner[r]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),!0;return!1}forEach(e){pt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kc(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.changes=new an(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:A.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:F.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?g.resolve(r.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,r){return et(e).put(gs(t),r)}removeEntry(e,t){const r=et(e),s=gs(t);return r.delete(s)}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Ae(e,r)))}getEntry(e,t){return et(e).get(gs(t)).next(r=>this.Re(t,r))}be(e,t){return et(e).get(gs(t)).next(r=>({document:this.Re(t,r),size:fs(r)}))}getEntries(e,t){let r=Ne();return this.Pe(e,t,(s,i)=>{const o=this.Re(s,i);r=r.insert(s,o)}).next(()=>r)}ve(e,t){let r=Ne(),s=new Q(I.comparator);return this.Pe(e,t,(i,o)=>{const a=this.Re(i,o);r=r.insert(i,a),s=s.insert(i,fs(o))}).next(()=>({documents:r,Ve:s}))}Pe(e,t,r){if(t.isEmpty())return g.resolve();const s=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let o=i.getNext();return et(e).Kt({range:s},(a,c,u)=>{const h=I.fromSegments(a);for(;o&&I.comparator(o,h)<0;)r(o,null),o=i.getNext();o&&o.isEqual(h)&&(r(o,c),o=i.hasNext()?i.getNext():null),o?u.Mt(o.path.toArray()):u.done()}).next(()=>{for(;o;)r(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,r){let s=Ne();const i=t.path.length+1,o={};if(r.isEqual(A.min())){const a=t.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=t.path.toArray(),c=Ji(r);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=U.collectionReadTimeIndex}return et(e).Kt(o,(a,c,u)=>{if(a.length!==i)return;const h=Xi(this.N,c);t.path.isPrefixOf(h.key.path)?Wn(t,h)&&(s=s.insert(h.key,h)):u.done()}).next(()=>s)}newChangeBuffer(e){return new og(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hu(e).get(Le.key).next(t=>(S(!!t),t))}Ae(e,t){return Hu(e).put(Le.key,t)}Re(e,t){if(t){const r=Xi(this.N,t);if(!(r.isNoDocument()&&r.version.isEqual(A.min())))return r}return F.newInvalidDocument(e)}}class og extends Gu{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new an(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new V((i,o)=>N(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.De.get(i);if(o.document.isValidDocument()){const c=Ou(this.Se.N,o.document,this.getReadTime(i));s=s.add(i.path.popLast()),r+=fs(c)-a,t.push(this.Se.addEntry(e,i,c))}else if(r-=a,this.trackRemovals){const c=Ou(this.Se.N,F.newNoDocument(i,A.min()),this.getReadTime(i));t.push(this.Se.addEntry(e,i,c))}else t.push(this.Se.removeEntry(e,i))}),s.forEach(i=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,i))}),t.push(this.Se.updateMetadata(e,r)),g.waitFor(t)}getFromCache(e,t){return this.Se.be(e,t).next(r=>(this.De.set(t,r.size),r.document))}getAllFromCache(e,t){return this.Se.ve(e,t).next(({documents:r,Ve:s})=>(s.forEach((i,o)=>{this.De.set(i,o)}),r))}}function Hu(n){return Ee(n,Le.store)}function et(n){return Ee(n,U.store)}function gs(n){return n.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.N=e}Ct(e,t,r,s){S(r<s&&r>=0&&s<=11);const i=new ds("createOrUpgrade",t);r<1&&s>=1&&(function(a){a.createObjectStore(Se.store)}(e),function(a){a.createObjectStore(Ye.store,{keyPath:Ye.keyPath}),a.createObjectStore(O.store,{keyPath:O.keyPath,autoIncrement:!0}).createIndex(O.userMutationsIndex,O.userMutationsKeyPath,{unique:!0}),a.createObjectStore(le.store)}(e),Qu(e),function(a){a.createObjectStore(U.store)}(e));let o=g.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore(ce.store),a.deleteObjectStore(ve.store),a.deleteObjectStore(_e.store)}(e),Qu(e)),o=o.next(()=>function(a){const c=a.store(_e.store),u=new _e(0,0,A.min().toTimestamp(),0);return c.put(_e.key,u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store(O.store).Lt().next(u=>{a.deleteObjectStore(O.store),a.createObjectStore(O.store,{keyPath:O.keyPath,autoIncrement:!0}).createIndex(O.userMutationsIndex,O.userMutationsKeyPath,{unique:!0});const h=c.store(O.store),l=u.map(d=>h.put(d));return g.waitFor(l)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore($e.store,{keyPath:$e.keyPath})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Ce(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Le.store)}(e),this.Ne(i)))),r<7&&s>=7&&(o=o.next(()=>this.xe(i))),r<8&&s>=8&&(o=o.next(()=>this.ke(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(U.store);c.createIndex(U.readTimeIndex,U.readTimeIndexPath,{unique:!1}),c.createIndex(U.collectionReadTimeIndex,U.collectionReadTimeIndexPath,{unique:!1})}(t)})),r<10&&s>=10&&(o=o.next(()=>this.$e(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Zt.store,{keyPath:Zt.keyPath})})(e),function(a){a.createObjectStore(en.store,{keyPath:en.keyPath})}(e)})),o}Ne(e){let t=0;return e.store(U.store).Kt((r,s)=>{t+=fs(s)}).next(()=>{const r=new Le(t);return e.store(Le.store).put(Le.key,r)})}Ce(e){const t=e.store(Ye.store),r=e.store(O.store);return t.Lt().next(s=>g.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.Lt(O.userMutationsIndex,o).next(a=>g.forEach(a,c=>{S(c.userId===i.userId);const u=rn(this.N,c);return qu(e,i.userId,u).next(()=>{})}))}))}xe(e){const t=e.store(ce.store),r=e.store(U.store);return e.store(_e.store).get(_e.key).next(s=>{const i=[];return r.Kt((o,a)=>{const c=new R(o),u=function(h){return[0,Ce(h)]}(c);i.push(t.get(u).next(h=>h?g.resolve():(l=>t.put(new ce(0,Ce(l),s.highestListenSequenceNumber)))(c)))}).next(()=>g.waitFor(i))})}ke(e,t){e.createObjectStore(It.store,{keyPath:It.keyPath});const r=t.store(It.store),s=new eo,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ce(c)})}};return t.store(U.store).Kt({qt:!0},(o,a)=>{const c=new R(o);return i(c.popLast())}).next(()=>t.store(le.store).Kt({qt:!0},([o,a,c],u)=>{const h=Ue(a);return i(h.popLast())}))}$e(e){const t=e.store(ve.store);return t.Kt((r,s)=>{const i=ir(s),o=Pu(this.N,i);return t.put(o)})}}function Qu(n){n.createObjectStore(ce.store,{keyPath:ce.keyPath}).createIndex(ce.documentTargetsIndex,ce.documentTargetsKeyPath,{unique:!0}),n.createObjectStore(ve.store,{keyPath:ve.keyPath}).createIndex(ve.queryTargetsIndexName,ve.queryTargetsKeyPath,{unique:!0}),n.createObjectStore(_e.store)}const no="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ro{constructor(e,t,r,s,i,o,a,c,u,h){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Oe=i,this.window=o,this.document=a,this.Fe=u,this.Me=h,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=l=>Promise.resolve(),!ro.bt())throw new p(f.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sg(this,s),this.We=t+"main",this.N=new Lu(c),this.Ge=new xe(this.We,11,new ag(this.N)),this.ze=new eg(this.referenceDelegate,this.N),this.Ht=new Zm,this.He=function(l,d){return new ig(l,d)}(this.N,this.Ht),this.Je=new Xm,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,h===!1&&K("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(f.FAILED_PRECONDITION,no);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new be(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ps(e).put(new $e(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(t=>this.isPrimary&&!t?this.on(e).next(()=>!1):!!t&&this.cn(e).next(()=>!0))).catch(e=>{if(Tt(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return or(e).get(Se.key).next(t=>g.resolve(this.an(t)))}un(e){return ps(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ee(t,$e.store);return r.Lt().next(s=>{const i=this.fn(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return g.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}an(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?g.resolve(!0):or(e).get(Se.key).next(t=>{if(t!==null&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.an(t)&&this.networkEnabled)return!0;if(!this.an(t)){if(!t.allowTabSynchronization)throw new p(f.FAILED_PRECONDITION,no);return!1}}return!(!this.networkEnabled||!this.inForeground)||ps(e).Lt().next(r=>this.fn(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&y("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[Se.store,$e.store],e=>{const t=new Ru(e,be.T);return this.on(t).next(()=>this.un(t))}),this.Ge.close(),this.yn()}fn(e,t){return e.filter(r=>this.ln(r.updateTimeMs,t)&&!this.wn(r.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>ps(e).Lt().next(t=>this.fn(t,18e5).map(r=>r.clientId)))}get started(){return this.Be}getMutationQueue(e){return to.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,r){y("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite";let i;return this.Ge.runTransaction(e,s,Qm,o=>(i=new Ru(o,this.Le?this.Le.next():be.T),t==="readwrite-primary"?this.sn(i).next(a=>!!a||this.rn(i)).next(a=>{if(!a)throw K(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new p(f.FAILED_PRECONDITION,Cu);return r(i)}).next(a=>this.cn(i).next(()=>a)):this.Tn(i).next(()=>r(i)))).then(o=>(i.raiseOnCommittedEvent(),o))}Tn(e){return or(e).get(Se.key).next(t=>{if(t!==null&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)&&!this.an(t)&&!(this.Me||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(f.FAILED_PRECONDITION,no)})}cn(e){const t=new Se(this.clientId,this.allowTabSynchronization,Date.now());return or(e).put(Se.key,t)}static bt(){return xe.bt()}on(e){const t=or(e);return t.get(Se.key).next(r=>this.an(r)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete(Se.key)):g.resolve())}ln(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(K(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),Ll()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const r=((t=this.Ye)===null||t===void 0?void 0:t.getItem(this.dn(e)))!==null;return y("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return K("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){K("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch{}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function or(n){return Ee(n,Se.store)}function ps(n){return Ee(n,$e.store)}function so(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.progress=e,this.En=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,r){this.He=e,this.In=t,this.Ht=r}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(r=>this.Rn(e,t,r))}Rn(e,t,r){return this.He.getEntry(e,t).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,t){e.forEach((r,s)=>{for(const i of t)i.applyToLocalView(s)})}Pn(e,t){return this.He.getEntries(e,t).next(r=>this.vn(e,r).next(()=>r))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(r=>this.bn(t,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return I.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.Vn(e,t.path):qi(t)?this.Sn(e,t,r):this.Dn(e,t,r)}Vn(e,t){return this.An(e,new I(t)).next(r=>{let s=zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,t,r){const s=t.collectionGroup;let i=zi();return this.Ht.getCollectionParents(e,s).next(o=>g.forEach(o,a=>{const c=function(u,h){return new Ve(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.Dn(e,c,r).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}Dn(e,t,r){let s,i;return this.He.getDocumentsMatchingQuery(e,t,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const c of i)for(const u of c.mutations){const h=u.key;let l=s.get(h);l==null&&(l=F.newInvalidDocument(h),s=s.insert(h,l)),ji(u,l,c.localWriteTime),l.isFoundDocument()||(s=s.remove(h))}}))).next(()=>(s.forEach((o,a)=>{Wn(t,a)||(s=s.remove(o))}),s))}Cn(e,t,r){let s=L();for(const o of t)for(const a of o.mutations)a instanceof We&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Nn=r,this.xn=s}static kn(e,t){let r=L(),s=L();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new io(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(t)||r.isEqual(A.min())?this.Fn(e,t):this.On.Pn(e,s).next(i=>{const o=this.Mn(t,i);return(rs(t)||ss(t))&&this.Ln(t.limitType,o,s,r)?this.Fn(e,t):(Ri()<=k.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Bi(t)),this.On.getDocumentsMatchingQuery(e,t,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,t){let r=new V(zc(e));return t.forEach((s,i)=>{Wn(e,i)&&(r=r.add(i))}),r}Ln(e,t,r,s){if(r.size!==t.size)return!0;const i=e==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,t){return Ri()<=k.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Bi(t)),this.On.getDocumentsMatchingQuery(e,t,A.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t,r,s){this.persistence=e,this.Bn=t,this.N=s,this.Un=new Q(N),this.qn=new an(i=>Gn(i),es),this.Kn=A.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Wu(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function Xu(n,e,t,r){return new ug(n,e,t,r)}async function Ju(n,e){const t=v(n);let r=t.In,s=t.Qn;const i=await t.persistence.runTransaction("Handle user change","readonly",o=>{let a;return t.In.getAllMutationBatches(o).next(c=>(a=c,r=t.persistence.getMutationQueue(e),s=new Wu(t.jn,r,t.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const u=[],h=[];let l=L();for(const d of a){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of c){h.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return s.Pn(o,l).next(d=>({Wn:d,removedBatchIds:u,addedBatchIds:h}))})});return t.In=r,t.Qn=s,t.Bn.$n(t.Qn),i}function hg(n,e){const t=v(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=g.resolve();return l.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(w=>{const b=c.docVersions.get(m);S(b!==null),w.version.compareTo(b)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&u.addEntry(w,c.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,h))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.In.performConsistencyCheck(r)).next(()=>t.Qn.Pn(r,s))})}function Zu(n){const e=v(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function lg(n,e){const t=v(n),r=e.snapshotVersion;let s=t.Un;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.jn.newChangeBuffer({trackRemovals:!0});s=t.Un;const a=[];e.targetChanges.forEach((u,h)=>{const l=s.get(h);if(!l)return;a.push(t.ze.removeMatchingKeys(i,u.removedDocuments,h).next(()=>t.ze.addMatchingKeys(i,u.addedDocuments,h)));const d=u.resumeToken;if(d.approximateByteSize()>0){const m=l.withResumeToken(d,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(h,m),function(w,b,D){return S(b.resumeToken.approximateByteSize()>0),w.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(l,m,u)&&a.push(t.ze.updateTargetData(i,m))}});let c=Ne();if(e.documentUpdates.forEach((u,h)=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(eh(i,o,e.documentUpdates,r,void 0).next(u=>{c=u})),!r.isEqual(A.min())){const u=t.ze.getLastRemoteSnapshotVersion(i).next(h=>t.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>t.Qn.vn(i,c)).next(()=>c)}).then(i=>(t.Un=s,i))}function eh(n,e,t,r,s){let i=L();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let a=Ne();return t.forEach((c,u)=>{const h=o.get(c),l=(s==null?void 0:s.get(c))||r;u.isNoDocument()&&u.version.isEqual(A.min())?(e.removeEntry(c,l),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u,l),a=a.insert(c,u)):y("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),a})}function dg(n,e){const t=v(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.In.getNextMutationBatchAfterBatchId(r,e)))}function cn(n,e){const t=v(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ze.getTargetData(r,e).next(i=>i?(s=i,g.resolve(s)):t.ze.allocateTargetId(r).next(o=>(s=new Xe(e,o,0,r.currentSequenceNumber),t.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Un=t.Un.insert(r.targetId,r),t.qn.set(e,r.targetId)),r})}async function un(n,e,t){const r=v(n),s=r.Un.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Tt(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function ys(n,e,t){const r=v(n);let s=A.min(),i=L();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=v(a),l=h.qn.get(u);return l!==void 0?g.resolve(h.Un.get(l)):h.ze.getTargetData(c,u)}(r,o,Ae(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,t?s:A.min(),t?i:L())).next(a=>({documents:a,Gn:i})))}function th(n,e){const t=v(n),r=v(t.ze),s=t.Un.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.Tt(i,e).next(o=>o?o.target:null))}function nh(n){const e=v(n);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(r,s,i){const o=v(r);let a=Ne(),c=Ji(i);const u=et(s),h=IDBKeyRange.lowerBound(c,!0);return u.Kt({index:U.readTimeIndex,range:h},(l,d)=>{const m=Xi(o.N,d);a=a.insert(m.key,m),c=d.readTime}).next(()=>({En:a,readTime:Mu(c)}))}(e.jn,t,e.Kn)).then(({En:t,readTime:r})=>(e.Kn=r,t))}async function fg(n){const e=v(n);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(r){const s=et(r);let i=A.min();return s.Kt({index:U.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(i=Mu(a.readTime)),c.done()}).next(()=>i)}(t)).then(t=>{e.Kn=t})}async function mg(n,e,t,r){const s=v(n);let i=L(),o=Ne(),a=cu();for(const h of t){const l=e.zn(h.metadata.name);h.document&&(i=i.add(l)),o=o.insert(l,e.Hn(h)),a=a.insert(l,e.Jn(h.metadata.readTime))}const c=s.jn.newChangeBuffer({trackRemovals:!0}),u=await cn(s,function(h){return Ae(Ht(R.fromString(`__bundle__/docs/${h}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",h=>eh(h,c,o,A.min(),a).next(l=>(c.apply(h),l)).next(l=>s.ze.removeMatchingKeysForTargetId(h,u.targetId).next(()=>s.ze.addMatchingKeys(h,i,u.targetId)).next(()=>s.Qn.vn(h,l)).next(()=>l)))}async function gg(n,e,t=L()){const r=await cn(n,Ae(Zi(e.bundledQuery))),s=v(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=Z(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Je.saveNamedQuery(i,e);const a=r.withResumeToken(J.EMPTY_BYTE_STRING,o);return s.Un=s.Un.insert(a.targetId,a),s.ze.updateTargetData(i,a).next(()=>s.ze.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.ze.addMatchingKeys(i,t,r.targetId)).next(()=>s.Je.saveNamedQuery(i,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return g.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var r;return this.Yn.set(t.id,{id:(r=t).id,version:r.version,createTime:Z(r.createTime)}),g.resolve()}getNamedQuery(e,t){return g.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(r){return{name:r.name,query:Zi(r.bundledQuery),readTime:Z(r.readTime)}}(t)),g.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.Zn=new V(ee.ts),this.es=new V(ee.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const r=new ee(e,t);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.rs(new ee(e,t))}os(e,t){e.forEach(r=>this.removeReference(r,t))}cs(e){const t=new I(new R([])),r=new ee(t,e),s=new ee(t,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new I(new R([])),r=new ee(t,e),s=new ee(t,e+1);let i=L();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ee(e,0),r=this.Zn.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ee{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return I.comparator(e.key,t.key)||N(e.ls,t.ls)}static ns(e,t){return N(e.ls,t.ls)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new V(ee.ts)}checkEmpty(e){return g.resolve(this.In.length===0)}addMutationBatch(e,t,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Wi(i,t,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new ee(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this._s(r),i=s<0?0:s;return g.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return g.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ee(t,0),s=new ee(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new V(N);return t.forEach(s=>{const i=new ee(s,0),o=new ee(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),g.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new ee(new I(i),0);let a=new V(N);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.ls)),!0)},o),g.resolve(this.gs(a))}gs(e){const t=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){S(this.ys(t.batchId,"removed")===0),this.In.shift();let r=this.ds;return g.forEach(t.mutations,s=>{const i=new ee(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,t){const r=new ee(t,0),s=this.ds.firstAfterOrEqual(r);return g.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,g.resolve()}ys(e,t){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Q(I.comparator),this.size=0}addEntry(e,t,r){const s=t.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(t);return this.docs=this.docs.insert(s,{document:t.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return g.resolve(r?r.document.clone():F.newInvalidDocument(t))}getEntries(e,t){let r=Ne();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():F.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(e,t,r){let s=Ne();const i=new I(t.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!t.path.isPrefixOf(a.path))break;u.compareTo(r)<=0||Wn(t,c)&&(s=s.insert(c.key,c.clone()))}return g.resolve(s)}Ts(e,t){return g.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new vg(this)}getSize(e){return g.resolve(this.size)}}class vg extends Gu{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?t.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),g.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.persistence=e,this.Es=new an(t=>Gn(t),es),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Is=0,this.As=new oo,this.targetCount=0,this.Rs=St.se()}forEachTarget(e,t){return this.Es.forEach((r,s)=>t(s)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Is&&(this.Is=t),g.resolve()}ce(e){this.Es.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new St(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.ce(t),g.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const r=this.Es.get(t)||null;return g.resolve(r)}addMatchingKeys(e,t,r){return this.As.ss(t,r),g.resolve()}removeMatchingKeys(e,t,r){this.As.os(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),g.resolve()}getMatchingKeysForTargetId(e,t){const r=this.As.hs(t);return g.resolve(r)}containsKey(e,t){return g.resolve(this.As.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t){this.bs={},this.Le=new be(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Eg(this),this.Ht=new Jm,this.He=function(r,s){return new wg(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new Lu(t),this.Je=new pg(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new yg(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,r){y("MemoryPersistence","Starting transaction:",e);const s=new Tg(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,t){return g.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,t)))}}class Tg extends xu{constructor(e){super(),this.currentSequenceNumber=e}}class ao{constructor(e){this.persistence=e,this.Ds=new oo,this.Cs=null}static Ns(e){return new ao(e)}get xs(){if(this.Cs)return this.Cs;throw T()}addReference(e,t,r){return this.Ds.addReference(r,t),this.xs.delete(r.toString()),g.resolve()}removeReference(e,t,r){return this.Ds.removeReference(r,t),this.xs.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),g.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.xs,r=>{const s=I.fromPath(r);return this.ks(e,s).next(i=>{i||t.removeEntry(s)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(r=>{r?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return g.or([()=>g.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,e){return`firestore_clients_${n}_${e}`}function sh(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function co(n,e){return`firestore_targets_${n}_${e}`}class ws{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static $s(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new p(s.error.code,s.error.message))),o?new ws(e,t,s.state,i):(K("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ar{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static $s(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new p(r.error.code,r.error.message))),i?new ar(e,r.state,s):(K("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=us();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Lc(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new vs(e,i):(K("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class uo{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new uo(t.clientId,t.onlineState):(K("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ho{constructor(){this.activeTargetIds=us()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lo{constructor(e,t,r,s,i){this.window=e,this.Oe=t,this.persistenceKey=r,this.Ls=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Q(N),this.started=!1,this.Ks=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=rh(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new ho),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const r of e){if(r===this.Ls)continue;const s=this.getItem(rh(this.persistenceKey,r));if(s){const i=vs.$s(r,s);i&&(this.qs=this.qs.insert(i.clientId,i))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const r=this.Xs(t);r&&this.Zs(r)}for(const r of this.Ks)this.Us(r);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,r){this.ei(e,t,r),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(co(this.persistenceKey,e));if(r){const s=ar.$s(e,r);s&&(t=s.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(co(this.persistenceKey,e))}updateQueryState(e,t,r){this.ii(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.ni(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(y("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void K("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ws.test(t.key)){if(t.newValue==null){const r=this.ci(t.key);return this.ai(r,null)}{const r=this.ui(t.key,t.newValue);if(r)return this.ai(r.clientId,r)}}else if(this.Gs.test(t.key)){if(t.newValue!==null){const r=this.hi(t.key,t.newValue);if(r)return this.li(r)}}else if(this.zs.test(t.key)){if(t.newValue!==null){const r=this.fi(t.key,t.newValue);if(r)return this.di(r)}}else if(t.key===this.Hs){if(t.newValue!==null){const r=this.Xs(t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.Qs){const r=function(s){let i=be.T;if(s!=null)try{const o=JSON.parse(s);S(typeof o=="number"),i=o}catch(o){K("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);r!==be.T&&this.sequenceNumberHandler(r)}else if(t.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(t)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,r){const s=new ws(this.currentUser,e,t,r),i=sh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Os())}ni(e){const t=sh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,r){const s=co(this.persistenceKey,e),i=new ar(e,t,r);this.setItem(s,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ci(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const r=this.ci(e);return vs.$s(r,t)}hi(e,t){const r=this.Gs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return ws.$s(new ie(i),s,t)}fi(e,t){const r=this.zs.exec(e),s=Number(r[1]);return ar.$s(s,t)}Xs(e){return uo.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ai(e,t){const r=t?this.qs.insert(e,t):this.qs.remove(e),s=this.ti(this.qs),i=this.ti(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.gi(o,a).then(()=>{this.qs=r})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=us();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class ih{constructor(){this.yi=new ho,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,r){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new ho,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{Ti(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,r,s){const i=this.Bi(e,t);y("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>(y("RestConnection","Received: ",a),a),a=>{throw qn("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,t,r,s){return this.Li(e,t,r,s)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+qt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const r in t.authHeaders)t.authHeaders.hasOwnProperty(r)&&(e[r]=t.authHeaders[r])}Bi(e,t){const r=Sg[e];return`${this.Fi}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,r,s){return new Promise((i,o)=>{const a=new Qf;a.listenOnce(zf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ki.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ki.TIMEOUT:y("Connection",'RPC "'+e+'" timed out'),o(new p(f.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(w)>=0?w:f.UNKNOWN}(l.status);o(new p(d,l.message))}else o(new p(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new p(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(t,"POST",c,r,15)})}ji(e,t){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=jf(),i=Kf(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Hf({})),this.Ui(o.initMessageHeaders,t),_l()||Cl()||xl()||kl()||Rl()||Dl()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");y("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,h=!1;const l=new _g({vi:m=>{h?y("Connection","Not sending because WebChannel is closed:",m):(u||(y("Connection","Opening WebChannel transport."),c.open(),u=!0),y("Connection","WebChannel sending:",m),c.send(m))},Vi:()=>c.close()}),d=(m,w,b)=>{m.listen(w,D=>{try{b(D)}catch(q){setTimeout(()=>{throw q},0)}})};return d(c,Yr.EventType.OPEN,()=>{h||y("Connection","WebChannel transport opened.")}),d(c,Yr.EventType.CLOSE,()=>{h||(h=!0,y("Connection","WebChannel transport closed"),l.$i())}),d(c,Yr.EventType.ERROR,m=>{h||(h=!0,qn("Connection","WebChannel transport errored:",m),l.$i(new p(f.UNAVAILABLE,"The operation could not be completed")))}),d(c,Yr.EventType.MESSAGE,m=>{var w;if(!h){const b=m.data[0];S(!!b);const D=b,q=D.error||((w=D[0])===null||w===void 0?void 0:w.error);if(q){y("Connection","WebChannel received error:",q);const at=q.status;let Ot=function(wl){const Qo=H[wl];if(Qo!==void 0)return ou(Qo)}(at),Er=q.message;Ot===void 0&&(Ot=f.INTERNAL,Er="Unknown error status: "+at+" with message "+q.message),h=!0,l.$i(new p(Ot,Er)),c.close()}else y("Connection","WebChannel received:",b),l.Oi(b)}}),d(i,Gf.STAT_EVENT,m=>{m.stat===_c.PROXY?y("Connection","Detected buffering proxy"):m.stat===_c.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{l.ki()},0),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(){return typeof window!="undefined"?window:null}function Es(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n){return new Lm(n,!0)}class fo{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,t-r);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t,r,s,i,o,a){this.Oe=e,this.er=r,this.nr=s,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new fo(e,t)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(K(t.toString()),K("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),t=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===t&&this.Er(r)},r=>{e(()=>{const s=new p(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(s)})})}Er(e){const t=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{t(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{t(()=>this.Ir(r))}),this.stream.onMessage(r=>{t(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return t=>{this.Oe.enqueueAndForget(()=>this.ir===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ng extends ch{constructor(e,t,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const t=Pm(this.N,e),r=function(s){if(!("targetChange"in s))return A.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?A.min():i.readTime?Z(i.readTime):A.min()}(e);return this.listener.Rr(t,r)}br(e){const t={};t.database=rr(this.N),t.addTarget=function(s,i){let o;const a=i.target;return o=ts(a)?{documents:Iu(s,a)}:{query:Tu(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=mu(s,i.resumeToken):i.snapshotVersion.compareTo(A.min())>0&&(o.readTime=tr(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=Vm(this.N,e);r&&(t.labels=r),this.mr(t)}Pr(e){const t={};t.database=rr(this.N),t.removeTarget=e,this.mr(t)}}class Dg extends ch{constructor(e,t,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const t=Fm(e.writeResults,e.commitTime),r=Z(e.commitTime);return this.listener.Dr(r,t)}return S(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=rr(this.N),this.mr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ls(this.N,r))};this.mr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg extends class{}{constructor(e,t,r){super(),this.credentials=e,this.sr=t,this.N=r,this.kr=!1}$r(){if(this.kr)throw new p(f.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,t,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new p(f.UNKNOWN,s.toString())})}Ki(e,t,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,t,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new p(f.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class xg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(K(t),this.Mr=!1):y("OnlineStateTracker",t)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{tt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=v(a);c.Wr.add(4),await hn(c),c.Hr.set("Unknown"),c.Wr.delete(4),await ur(c)}(this))})}),this.Hr=new xg(r,s)}}async function ur(n){if(tt(n))for(const e of n.Gr)await e(!0)}async function hn(n){for(const e of n.Gr)await e(!1)}function Is(n,e){const t=v(n);t.Qr.has(e.targetId)||(t.Qr.set(e.targetId,e),po(t)?go(t):dn(t).hr()&&mo(t,e))}function hr(n,e){const t=v(n),r=dn(t);t.Qr.delete(e),r.hr()&&uh(t,e),t.Qr.size===0&&(r.hr()?r.wr():tt(t)&&t.Hr.set("Unknown"))}function mo(n,e){n.Jr.Y(e.targetId),dn(n).br(e)}function uh(n,e){n.Jr.Y(e),dn(n).Pr(e)}function go(n){n.Jr=new xm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>n.Qr.get(e)||null}),dn(n).start(),n.Hr.Lr()}function po(n){return tt(n)&&!dn(n).ur()&&n.Qr.size>0}function tt(n){return v(n).Wr.size===0}function hh(n){n.Jr=void 0}async function Rg(n){n.Qr.forEach((e,t)=>{mo(n,e)})}async function Lg(n,e){hh(n),po(n)?(n.Hr.qr(e),go(n)):n.Hr.set("Unknown")}async function Og(n,e,t){if(n.Hr.set("Online"),e instanceof hu&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Qr.delete(o),r.Jr.removeTarget(o))}(n,e)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ts(n,r)}else if(e instanceof hs?n.Jr.rt(e):e instanceof uu?n.Jr.ft(e):n.Jr.at(e),!t.isEqual(A.min()))try{const r=await Zu(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.Jr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.Qr.get(c);u&&s.Qr.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Qr.get(a);if(!c)return;s.Qr.set(a,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),uh(s,a);const u=new Xe(c.target,a,1,c.sequenceNumber);mo(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await Ts(n,r)}}async function Ts(n,e,t){if(!Tt(e))throw e;n.Wr.add(1),await hn(n),n.Hr.set("Offline"),t||(t=()=>Zu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n.Wr.delete(1),await ur(n)})}function lh(n,e){return e().catch(t=>Ts(n,t,e))}async function ln(n){const e=v(n),t=nt(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;Mg(e);)try{const s=await dg(e.localStore,r);if(s===null){e.jr.length===0&&t.wr();break}r=s.batchId,Pg(e,s)}catch(s){await Ts(e,s)}dh(e)&&fh(e)}function Mg(n){return tt(n)&&n.jr.length<10}function Pg(n,e){n.jr.push(e);const t=nt(n);t.hr()&&t.Vr&&t.Sr(e.mutations)}function dh(n){return tt(n)&&!nt(n).ur()&&n.jr.length>0}function fh(n){nt(n).start()}async function Fg(n){nt(n).Nr()}async function Vg(n){const e=nt(n);for(const t of n.jr)e.Sr(t.mutations)}async function Ug(n,e,t){const r=n.jr.shift(),s=Yi.from(r,e,t);await lh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ln(n)}async function $g(n,e){e&&nt(n).Vr&&await async function(t,r){if(s=r.code,iu(s)&&s!==f.ABORTED){const i=t.jr.shift();nt(t).dr(),await lh(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ln(t)}var s}(n,e),dh(n)&&fh(n)}async function yo(n,e){const t=v(n);e?(t.Wr.delete(2),await ur(t)):e||(t.Wr.add(2),await hn(t),t.Hr.set("Unknown"))}function dn(n){return n.Yr||(n.Yr=function(e,t,r){const s=v(e);return s.$r(),new Ng(t,s.sr,s.credentials,s.N,r)}(n.datastore,n.asyncQueue,{Si:Rg.bind(null,n),Ci:Lg.bind(null,n),Rr:Og.bind(null,n)}),n.Gr.push(async e=>{e?(n.Yr.dr(),po(n)?go(n):n.Hr.set("Unknown")):(await n.Yr.stop(),hh(n))})),n.Yr}function nt(n){return n.Xr||(n.Xr=function(e,t,r){const s=v(e);return s.$r(),new Dg(t,s.sr,s.credentials,s.N,r)}(n.datastore,n.asyncQueue,{Si:Fg.bind(null,n),Ci:$g.bind(null,n),Cr:Vg.bind(null,n),Dr:Ug.bind(null,n)}),n.Gr.push(async e=>{e?(n.Xr.dr(),await ln(n)):(await n.Xr.stop(),n.jr.length>0&&(y("RemoteStore",`Stopping write stream with ${n.jr.length} pending writes`),n.jr=[]))})),n.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Y,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new wo(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fn(n,e){if(K("AsyncQueue",`${e}: ${n}`),Tt(n))return new p(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=zi(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new mn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.Zr=new Q(I.comparator)}track(e){const t=e.doc.key,r=this.Zr.get(t);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(t,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(t):e.type===1&&r.type===2?this.Zr=this.Zr.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):T():this.Zr=this.Zr.insert(t,e)}eo(){const e=[];return this.Zr.inorderTraversal((t,r)=>{e.push(r)}),e}}class gn{constructor(e,t,r,s,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,r,s){const i=[];return t.forEach(o=>{i.push({type:0,doc:o})}),new gn(e,t,mn.emptySet(t),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.no=void 0,this.listeners=[]}}class Bg{constructor(){this.queries=new an(e=>Kc(e),Qn),this.onlineState="Unknown",this.so=new Set}}async function vo(n,e){const t=v(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new qg),s)try{i.no=await t.onListen(r)}catch(o){const a=fn(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.io(t.onlineState),i.no&&e.ro(i.no)&&Io(t)}async function Eo(n,e){const t=v(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function jg(n,e){const t=v(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.ro(s)&&(r=!0);o.no=s}}r&&Io(t)}function Kg(n,e,t){const r=v(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function Io(n){n.so.forEach(e=>{e.next()})}class To{constructor(e,t,r){this.query=e,this.oo=t,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.uo(e)&&(this.oo.next(e),t=!0):this.ho(e,this.onlineState)&&(this.lo(e),t=!0),this.ao=e,t}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let t=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),t=!0),t}ho(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||t==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const t=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}lo(e){e=gn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t){this.payload=e,this.byteLength=t}wo(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.N=e}zn(e){return Re(this.N,e)}Hn(e){return e.metadata.exists?vu(this.N,e.document,!1):F.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return Z(e)}}class Gg{constructor(e,t,r){this._o=e,this.localStore=t,this.N=r,this.queries=[],this.documents=[],this.progress=ph(e)}mo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}yo(e){const t=new Map,r=new gh(this.N);for(const s of e)if(s.metadata.queries){const i=r.zn(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||L()).add(i);t.set(o,a)}}return t}async complete(){const e=await mg(this.localStore,new gh(this.N),this.documents,this._o.id),t=this.yo(this.documents);for(const r of this.queries)await gg(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",new cg(Object.assign({},this.progress),e)}}function ph(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.key=e}}class wh{constructor(e){this.key=e}}class vh{constructor(e,t){this.query=e,this.po=t,this.To=null,this.current=!1,this.Eo=L(),this.mutatedKeys=L(),this.Io=zc(e),this.Ao=new mn(this.Io)}get Ro(){return this.po}bo(e,t){const r=t?t.Po:new mh,s=t?t.Ao:this.Ao;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=rs(this.query)&&s.size===this.query.limit?s.last():null,u=ss(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,l)=>{const d=s.get(h),m=Wn(this.query,l)?l:null,w=!!d&&this.mutatedKeys.has(d.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;d&&m?d.data.isEqual(m.data)?w!==b&&(r.track({type:3,doc:m}),D=!0):this.vo(d,m)||(r.track({type:2,doc:m}),D=!0,(c&&this.Io(m,c)>0||u&&this.Io(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),D=!0):d&&!m&&(r.track({type:1,doc:d}),D=!0,(c||u)&&(a=!0)),D&&(m?(o=o.add(m),i=b?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),rs(this.query)||ss(this.query))for(;o.size>this.query.limit;){const h=rs(this.query)?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ao:o,Po:r,Ln:a,mutatedKeys:i}}vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((u,h)=>function(l,d){const m=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return m(l)-m(d)}(u.type,h.type)||this.Io(u.doc,h.doc)),this.Vo(r);const o=t?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,i.length!==0||c?{snapshot:new gn(this.query,e.Ao,s,i,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new mh,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(t=>this.po=this.po.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.po=this.po.delete(t)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=L(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const t=[];return e.forEach(r=>{this.Eo.has(r)||t.push(new wh(r))}),this.Eo.forEach(r=>{e.has(r)||t.push(new yh(r))}),t}No(e){this.po=e.Gn,this.Eo=L();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return gn.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class Hg{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Qg{constructor(e){this.key=e,this.ko=!1}}class Wg{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new an(a=>Kc(a),Qn),this.Fo=new Map,this.Mo=new Set,this.Lo=new Q(I.comparator),this.Bo=new Map,this.Uo=new oo,this.qo={},this.Ko=new Map,this.jo=St.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function Yg(n,e){const t=Do(n);let r,s;const i=t.Oo.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await cn(t.localStore,Ae(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await bo(t,e,r,a==="current"),t.isPrimaryClient&&Is(t.remoteStore,o)}return s}async function bo(n,e,t,r){n.Wo=(h,l,d)=>async function(m,w,b,D){let q=w.view.bo(b);q.Ln&&(q=await ys(m.localStore,w.query,!1).then(({documents:Er})=>w.view.bo(Er,q)));const at=D&&D.targetChanges.get(w.targetId),Ot=w.view.applyChanges(q,m.isPrimaryClient,at);return Ao(m,w.targetId,Ot.Do),Ot.snapshot}(n,h,l,d);const s=await ys(n.localStore,e,!0),i=new vh(e,s.Gn),o=i.bo(s.documents),a=er.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline"),c=i.applyChanges(o,n.isPrimaryClient,a);Ao(n,t,c.Do);const u=new Hg(e,t,i);return n.Oo.set(e,u),n.Fo.has(t)?n.Fo.get(t).push(e):n.Fo.set(t,[e]),c.snapshot}async function Xg(n,e){const t=v(n),r=t.Oo.get(e),s=t.Fo.get(r.targetId);if(s.length>1)return t.Fo.set(r.targetId,s.filter(i=>!Qn(i,e))),void t.Oo.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await un(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),hr(t.remoteStore,r.targetId),pn(t,r.targetId)}).catch(_t)):(pn(t,r.targetId),await un(t.localStore,r.targetId,!0))}async function Jg(n,e,t){const r=Co(n);try{const s=await function(i,o){const a=v(i),c=X.now(),u=o.reduce((l,d)=>l.add(d.key),L());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.Qn.Pn(l,u).next(d=>{h=d;const m=[];for(const w of o){const b=bm(w,h.get(w.key));b!=null&&m.push(new We(w.key,b,Fc(b.value.mapValue),G.exists(!0)))}return a.In.addMutationBatch(l,c,m,o)})).then(l=>(l.applyToLocalDocumentSet(h),{batchId:l.batchId,changes:h}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.qo[i.currentUser.toKey()];c||(c=new Q(N)),c=c.insert(o,a),i.qo[i.currentUser.toKey()]=c}(r,s.batchId,t),await qe(r,s.changes),await ln(r.remoteStore)}catch(s){const i=fn(s,"Failed to persist write");t.reject(i)}}async function Eh(n,e){const t=v(n);try{const r=await lg(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Bo.get(i);o&&(S(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?S(o.ko):s.removedDocuments.size>0&&(S(o.ko),o.ko=!1))}),await qe(t,r,e)}catch(r){await _t(r)}}function Ih(n,e,t){const r=v(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=v(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.io(o)&&(c=!0)}),c&&Io(a)}(r.eventManager,e),s.length&&r.$o.Rr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zg(n,e,t){const r=v(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Bo.get(e),i=s&&s.key;if(i){let o=new Q(I.comparator);o=o.insert(i,F.newNoDocument(i,A.min()));const a=L().add(i),c=new Zn(A.min(),new Map,new V(N),o,a);await Eh(r,c),r.Lo=r.Lo.remove(i),r.Bo.delete(e),No(r)}else await un(r.localStore,e,!1).then(()=>pn(r,e,t)).catch(_t)}async function ep(n,e){const t=v(n),r=e.batch.batchId;try{const s=await hg(t.localStore,e);_o(t,r,null),So(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qe(t,s)}catch(s){await _t(s)}}async function tp(n,e,t){const r=v(n);try{const s=await function(i,o){const a=v(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.In.lookupMutationBatch(c,o).next(h=>(S(h!==null),u=h.keys(),a.In.removeMutationBatch(c,h))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,u))})}(r.localStore,e);_o(r,e,t),So(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qe(r,s)}catch(s){await _t(s)}}async function np(n,e){const t=v(n);tt(t.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=v(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const s=t.Ko.get(r)||[];s.push(e),t.Ko.set(r,s)}catch(r){const s=fn(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function So(n,e){(n.Ko.get(e)||[]).forEach(t=>{t.resolve()}),n.Ko.delete(e)}function _o(n,e,t){const r=v(n);let s=r.qo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.qo[r.currentUser.toKey()]=s}}function pn(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Fo.get(e))n.Oo.delete(r),t&&n.$o.Go(r,t);n.Fo.delete(e),n.isPrimaryClient&&n.Uo.cs(e).forEach(r=>{n.Uo.containsKey(r)||Th(n,r)})}function Th(n,e){n.Mo.delete(e.path.canonicalString());const t=n.Lo.get(e);t!==null&&(hr(n.remoteStore,t),n.Lo=n.Lo.remove(e),n.Bo.delete(t),No(n))}function Ao(n,e,t){for(const r of t)r instanceof yh?(n.Uo.addReference(r.key,e),rp(n,r)):r instanceof wh?(y("SyncEngine","Document no longer in limbo: "+r.key),n.Uo.removeReference(r.key,e),n.Uo.containsKey(r.key)||Th(n,r.key)):T()}function rp(n,e){const t=e.key,r=t.path.canonicalString();n.Lo.get(t)||n.Mo.has(r)||(y("SyncEngine","New document in limbo: "+t),n.Mo.add(r),No(n))}function No(n){for(;n.Mo.size>0&&n.Lo.size<n.maxConcurrentLimboResolutions;){const e=n.Mo.values().next().value;n.Mo.delete(e);const t=new I(R.fromString(e)),r=n.jo.next();n.Bo.set(r,new Qg(t)),n.Lo=n.Lo.insert(t,r),Is(n.remoteStore,new Xe(Ae(Ht(t.path)),r,2,be.T))}}async function qe(n,e,t){const r=v(n),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Wo(c,e,t).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const h=io.kn(c.targetId,u);i.push(h)}}))}),await Promise.all(o),r.$o.Rr(s),await async function(a,c){const u=v(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(c,l=>g.forEach(l.Nn,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>g.forEach(l.xn,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Tt(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.Un.get(l),m=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(m);u.Un=u.Un.insert(l,w)}}}(r.localStore,i))}async function sp(n,e){const t=v(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const r=await Ju(t.localStore,e);t.currentUser=e,function(s,i){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new p(f.CANCELLED,i))})}),s.Ko.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qe(t,r.Wn)}}function ip(n,e){const t=v(n),r=t.Bo.get(e);if(r&&r.ko)return L().add(r.key);{let s=L();const i=t.Fo.get(e);if(!i)return s;for(const o of i){const a=t.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}async function op(n,e){const t=v(n),r=await ys(t.localStore,e.query,!0),s=e.view.No(r);return t.isPrimaryClient&&Ao(t,e.targetId,s.Do),s}async function ap(n){const e=v(n);return nh(e.localStore).then(t=>qe(e,t))}async function cp(n,e,t,r){const s=v(n),i=await function(o,a){const c=v(o),u=v(c.In);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>u.Xt(h,a).next(l=>l?c.Qn.Pn(h,l):g.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await ln(s.remoteStore):t==="acknowledged"||t==="rejected"?(_o(s,e,r||null),So(s,e),function(o,a){v(v(o).In).te(a)}(s.localStore,e)):T(),await qe(s,i)):y("SyncEngine","Cannot apply mutation batch with id: "+e)}async function up(n,e){const t=v(n);if(Do(t),Co(t),e===!0&&t.Qo!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await bh(t,r.toArray());t.Qo=!0,await yo(t.remoteStore,!0);for(const i of s)Is(t.remoteStore,i)}else if(e===!1&&t.Qo!==!1){const r=[];let s=Promise.resolve();t.Fo.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(pn(t,o),un(t.localStore,o,!0))),hr(t.remoteStore,o)}),await s,await bh(t,r),function(i){const o=v(i);o.Bo.forEach((a,c)=>{hr(o.remoteStore,c)}),o.Uo.us(),o.Bo=new Map,o.Lo=new Q(I.comparator)}(t),t.Qo=!1,await yo(t.remoteStore,!1)}}async function bh(n,e,t){const r=v(n),s=[],i=[];for(const o of e){let a;const c=r.Fo.get(o);if(c&&c.length!==0){a=await cn(r.localStore,Ae(c[0]));for(const u of c){const h=r.Oo.get(u),l=await op(r,h);l.snapshot&&i.push(l.snapshot)}}else{const u=await th(r.localStore,o);a=await cn(r.localStore,u),await bo(r,Sh(u),o,!1)}s.push(a)}return r.$o.Rr(i),s}function Sh(n){return Bc(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function hp(n){const e=v(n);return v(v(e.localStore).persistence).pn()}async function lp(n,e,t,r){const s=v(n);if(s.Qo)y("SyncEngine","Ignoring unexpected query state notification.");else if(s.Fo.has(e))switch(t){case"current":case"not-current":{const i=await nh(s.localStore),o=Zn.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await qe(s,i,o);break}case"rejected":await un(s.localStore,e,!0),pn(s,e,r);break;default:T()}}async function dp(n,e,t){const r=Do(n);if(r.Qo){for(const s of e){if(r.Fo.has(s)){y("SyncEngine","Adding an already active target "+s);continue}const i=await th(r.localStore,s),o=await cn(r.localStore,i);await bo(r,Sh(i),o.targetId,!1),Is(r.remoteStore,o)}for(const s of t)r.Fo.has(s)&&await un(r.localStore,s,!1).then(()=>{hr(r.remoteStore,s),pn(r,s)}).catch(_t)}}function Do(n){const e=v(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Eh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ip.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zg.bind(null,e),e.$o.Rr=jg.bind(null,e.eventManager),e.$o.Go=Kg.bind(null,e.eventManager),e}function Co(n){const e=v(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ep.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tp.bind(null,e),e}function fp(n,e,t){const r=v(n);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(l,d){const m=v(l),w=Z(d.createTime);return m.persistence.runTransaction("hasNewerBundle","readonly",b=>m.Je.getBundleMetadata(b,d.id)).then(b=>!!b&&b.createTime.compareTo(w)>=0)}(s.localStore,a))return await i.close(),void o._completeWith(function(l){return{taskState:"Success",documentsLoaded:l.totalDocuments,bytesLoaded:l.totalBytes,totalDocuments:l.totalDocuments,totalBytes:l.totalBytes}}(a));o._updateProgress(ph(a));const c=new Gg(a,s.localStore,i.N);let u=await i.zo();for(;u;){const l=await c.mo(u);l&&o._updateProgress(l),u=await i.zo()}const h=await c.complete();await qe(s,h.En,void 0),await function(l,d){const m=v(l);return m.persistence.runTransaction("Save bundle","readwrite",w=>m.Je.saveBundleMetadata(w,d))}(s.localStore,a),o._completeWith(h.progress)}catch(a){qn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,t).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class _h{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=cr(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return Xu(this.persistence,new Yu,e.initialUser,this.N)}Jo(e){return new Ig(ao.Ns,this.N)}Ho(e){return new ih}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ah extends _h{constructor(e,t,r){super(),this.Zo=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await fg(this.localStore),await this.Zo.initialize(this,e),await Co(this.Zo.syncEngine),await ln(this.Zo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Xo(e){return Xu(this.persistence,new Yu,e.initialUser,this.N)}Yo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new ng(t,e.asyncQueue)}Jo(e){const t=so(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ie.withCacheSize(this.cacheSizeBytes):Ie.DEFAULT;return new ro(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ah(),Es(),this.N,this.sharedClientState,!!this.forceOwnership)}Ho(e){return new ih}}class mp extends Ah{constructor(e,t){super(e,t,!1),this.Zo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Zo.syncEngine;this.sharedClientState instanceof lo&&(this.sharedClientState.syncEngine={_i:cp.bind(null,t),mi:lp.bind(null,t),gi:dp.bind(null,t),pn:hp.bind(null,t),wi:ap.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn(async r=>{await up(this.Zo.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Ho(e){const t=ah();if(!lo.bt(t))throw new p(f.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=so(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new lo(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class xo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ih(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sp.bind(null,this.syncEngine),await yo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bg}createDatastore(e){const t=cr(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Ag(s));var s;return function(i,o,a){return new Cg(i,o,a)}(e.credentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Ih(this.syncEngine,a,0),o=oh.bt()?new oh:new bg,new kg(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const h=new Wg(r,s,i,o,a,c);return u&&(h.Qo=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=v(e);y("RemoteStore","RemoteStore shutting down."),t.Wr.add(5),await hn(t),t.zr.shutdown(),t.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){this.nc=e,this.N=t,this.metadata=new Y,this.buffer=new Uint8Array,this.sc=new TextDecoder("utf-8"),this.ic().then(r=>{r&&r.wo()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.nc.cancel()}async getMetadata(){return this.metadata.promise}async zo(){return await this.getMetadata(),this.ic()}async ic(){const e=await this.rc();if(e===null)return null;const t=this.sc.decode(e),r=Number(t);isNaN(r)&&this.oc(`length string (${t}) is not valid number`);const s=await this.cc(r);return new zg(JSON.parse(s),e.length+r)}ac(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async rc(){for(;this.ac()<0&&!await this.uc(););if(this.buffer.length===0)return null;const e=this.ac();e<0&&this.oc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async cc(e){for(;this.buffer.length<e;)await this.uc()&&this.oc("Reached the end of bundle when more is expected.");const t=this.sc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}oc(e){throw this.nc.cancel(),new Error(`Invalid bundle format: ${e}`)}async uc(){const e=await this.nc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(f.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,s){const i=v(r),o=rr(i.N)+"/documents",a={documents:s.map(l=>nr(i.N,l))},c=await i.Ki("BatchGetDocuments",o,a),u=new Map;c.forEach(l=>{const d=Mm(i.N,l);u.set(d.key.toString(),d)});const h=[];return s.forEach(l=>{const d=u.get(l.toString());S(!!d),h.push(d)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Jn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=I.fromPath(r);this.mutations.push(new Ki(s,this.precondition(s)))}),await async function(t,r){const s=v(t),i=rr(s.N)+"/documents",o={writes:r.map(a=>ls(s.N,a))};await s.Li("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T();t=A.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new p(f.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?G.updateTime(t):G.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(A.min()))throw new p(f.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return G.updateTime(t)}return G.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t,r,s){this.asyncQueue=e,this.datastore=t,this.updateFunction=r,this.deferred=s,this.hc=5,this.ar=new fo(this.asyncQueue,"transaction_retry")}run(){this.hc-=1,this.lc()}lc(){this.ar.Xi(async()=>{const e=new pp(this.datastore),t=this.fc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.dc(s)}))}).catch(r=>{this.dc(r)})})}fc(e){try{const t=this.updateFunction(e);return!yt(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}dc(e){this.hc>0&&this.wc(e)?(this.hc-=1,this.asyncQueue.enqueueAndForget(()=>(this.lc(),Promise.resolve()))):this.deferred.reject(e)}wc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!iu(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t,r){this.credentials=e,this.asyncQueue=t,this.databaseInfo=r,this.user=ie.UNAUTHENTICATED,this.clientId=Dc.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async s=>{y("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Y;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const r=fn(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dh(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ju(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Ch(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ko(n);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>async function(i,o){const a=v(i);a.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const c=tt(a);a.Wr.add(3),await hn(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await ur(a)}(e.remoteStore,s)),n.onlineComponents=e}async function ko(n){return n.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Dh(n,new _h)),n.offlineComponents}async function Ss(n){return n.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await Ch(n,new xo)),n.onlineComponents}function xh(n){return ko(n).then(e=>e.persistence)}function Ro(n){return ko(n).then(e=>e.localStore)}function kh(n){return Ss(n).then(e=>e.remoteStore)}function Lo(n){return Ss(n).then(e=>e.syncEngine)}async function yn(n){const e=await Ss(n),t=e.eventManager;return t.onListen=Yg.bind(null,e.syncEngine),t.onUnlisten=Xg.bind(null,e.syncEngine),t}function vp(n){return n.asyncQueue.enqueue(async()=>{const e=await xh(n),t=await kh(n);return e.setNetworkEnabled(!0),function(r){const s=v(r);return s.Wr.delete(0),ur(s)}(t)})}function Ep(n){return n.asyncQueue.enqueue(async()=>{const e=await xh(n),t=await kh(n);return e.setNetworkEnabled(!1),async function(r){const s=v(r);s.Wr.add(0),await hn(s),s.Hr.set("Offline")}(t)})}function Ip(n,e){const t=new Y;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const u=v(a);return u.persistence.runTransaction("read document","readonly",h=>u.Qn.An(h,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new p(f.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=fn(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await Ro(n),e,t)),t.promise}function Rh(n,e,t={}){const r=new Y;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new bs({next:l=>{i.enqueueAndForget(()=>Eo(s,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new p(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new p(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new To(Ht(o.path),u,{includeMetadataChanges:!0,fo:!0});return vo(s,h)}(await yn(n),n.asyncQueue,e,t,r)),r.promise}function Tp(n,e){const t=new Y;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await ys(r,s,!0),a=new vh(s,o.Gn),c=a.bo(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=fn(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await Ro(n),e,t)),t.promise}function Lh(n,e,t={}){const r=new Y;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new bs({next:l=>{i.enqueueAndForget(()=>Eo(s,h)),l.fromCache&&a.source==="server"?c.reject(new p(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new To(o,u,{includeMetadataChanges:!0,fo:!0});return vo(s,h)}(await yn(n),n.asyncQueue,e,t,r)),r.promise}function bp(n,e){const t=new bs(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,s){v(r).so.add(s),s.next()}(await yn(n),t)),()=>{t.ec(),n.asyncQueue.enqueueAndForget(async()=>function(r,s){v(r).so.delete(s)}(await yn(n),t))}}function Sp(n,e){const t=new Y;return n.asyncQueue.enqueueAndForget(async()=>{const r=await function(s){return Ss(s).then(i=>i.datastore)}(n);new yp(n.asyncQueue,r,e,t).run()}),t.promise}function _p(n,e,t,r){const s=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new gp(c,u)}(function(c,u){if(c instanceof Uint8Array)return Nh(c,u);if(c instanceof ArrayBuffer)return Nh(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,cr(e));n.asyncQueue.enqueueAndForget(async()=>{fp(await Lo(n),s,r)})}function Ap(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const s=v(t);return s.persistence.runTransaction("Get named query","readonly",i=>s.Je.getNamedQuery(i,r))}(await Ro(n),e))}class Np{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n,e,t){if(!t)throw new p(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Mh(n,e,t,r){if(e===!0&&r===!0)throw new p(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ph(n){if(!I.isDocumentKey(n))throw new p(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fh(n){if(I.isDocumentKey(n))throw new p(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _s(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function x(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_s(n);throw new p(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Vh(n,e){if(e<=0)throw new p(f.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new p(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Mh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uh({}),this._settingsFrozen=!1,e instanceof wn?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new p(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wn(r.options.projectId)}(e))}get app(){if(!this._app)throw new p(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uh(e),e.credentials!==void 0&&(this._credentials=function(t){if(!t)return new Xf;switch(t.type){case"gapi":const r=t.client;return S(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new tm(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new p(f.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Oh.get(e);t&&(y("ComponentProvider","Removing Datastore"),Oh.delete(e),t.terminate())}(this),Promise.resolve()}}function Dp(n,e,t,r={}){var s;const i=(n=x(n,lr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&qn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ie.MOCK_USER;else{o=Sl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new p(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ie(c)}n._credentials=new Jf(new Nc(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new M(this.firestore,e,this._key)}}class de{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new de(this.firestore,e,this._query)}}class Oe extends de{constructor(e,t,r){super(e,t,Ht(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new M(this.firestore,null,new I(e))}withConverter(e){return new Oe(this.firestore,e,this._path)}}function $h(n,e,...t){if(n=B(n),Oo("collection","path",e),n instanceof lr){const r=R.fromString(e,...t);return Fh(r),new Oe(n,null,r)}{if(!(n instanceof M||n instanceof Oe))throw new p(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(R.fromString(e,...t));return Fh(r),new Oe(n.firestore,null,r)}}function Cp(n,e){if(n=x(n,lr),Oo("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(f.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new de(n,null,function(t){return new Ve(R.emptyPath(),t)}(e))}function As(n,e,...t){if(n=B(n),arguments.length===1&&(e=Dc.I()),Oo("doc","path",e),n instanceof lr){const r=R.fromString(e,...t);return Ph(r),new M(n,null,new I(r))}{if(!(n instanceof M||n instanceof Oe))throw new p(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(R.fromString(e,...t));return Ph(r),new M(n.firestore,n instanceof Oe?n.converter:null,new I(r))}}function qh(n,e){return n=B(n),e=B(e),(n instanceof M||n instanceof Oe)&&(e instanceof M||e instanceof Oe)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Bh(n,e){return n=B(n),e=B(e),n instanceof de&&e instanceof de&&n.firestore===e.firestore&&Qn(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new fo(this,"async_queue_retry"),this.Rc=()=>{const t=Es();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const e=Es();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const t=Es();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const t=new Y;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Tt(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const t=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw K("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ec=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.bc(),this.Ac.indexOf(e)>-1&&(t=0);const s=wo.createAndSchedule(this,e,t,r,i=>this.Vc(i));return this.yc.push(s),s}bc(){this.Tc&&T()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const t of this.yc)if(t.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.yc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const t=this.yc.indexOf(e);this.yc.splice(t,1)}}function Mo(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class kp{constructor(){this._progressObserver={},this._taskCompletionResolver=new Y,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=-1;class $ extends lr{constructor(e,t){super(e,t),this.type="firestore",this._queue=new xp,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||jh(this),this._firestoreClient.terminate()}}function te(n){return n._firestoreClient||jh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function jh(n){var e;const t=n._freezeSettings(),r=function(s,i,o,a){return new Np(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new wp(n._credentials,n._queue,r)}function Lp(n,e){zh(n=x(n,$));const t=te(n),r=n._freezeSettings(),s=new xo;return Kh(t,s,new Ah(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Op(n){zh(n=x(n,$));const e=te(n),t=n._freezeSettings(),r=new xo;return Kh(e,r,new mp(r,t.cacheSizeBytes))}function Kh(n,e,t){const r=new Y;return n.asyncQueue.enqueue(async()=>{try{await Dh(n,t),await Ch(n,e),r.resolve()}catch(s){if(!function(i){return i.name==="FirebaseError"?i.code===f.FAILED_PRECONDITION||i.code===f.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(s))throw s;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function Mp(n){if(n._initialized&&!n._terminated)throw new p(f.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Y;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!xe.bt())return Promise.resolve();const r=t+"main";await xe.delete(r)}(so(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Pp(n){return function(e){const t=new Y;return e.asyncQueue.enqueueAndForget(async()=>np(await Lo(e),t)),t.promise}(te(n=x(n,$)))}function Fp(n){return vp(te(n=x(n,$)))}function Vp(n){return Ep(te(n=x(n,$)))}function Up(n,e){const t=te(n=x(n,$)),r=new kp;return _p(t,n._databaseId,e,r),r}function $p(n,e){return Ap(te(n=x(n,$)),e).then(t=>t?new de(n,null,t.query):null)}function zh(n){if(n._initialized||n._terminated)throw new p(f.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Me(J.fromBase64String(e))}catch(t){throw new p(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Me(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=/^__.*__$/;class Bp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new We(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xn(e,this.data,t,this.fieldTransforms)}}class Gh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new We(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Ds{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new Ds(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$c({path:r,Fc:!1});return s.Mc(e),s}Lc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$c({path:r,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return xs(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(Hh(this.kc)&&qp.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class jp{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=r||cr(e)}jc(e,t,r,s=!1){return new Ds({kc:e,methodName:t,Kc:r,path:oe.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Nt(n){const e=n._freezeSettings(),t=cr(n._databaseId);return new jp(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Cs(n,e,t,r,s,i={}){const o=n.jc(i.merge||i.mergeFields?2:0,e,t,s);Uo("Data must be an object, but it was:",o,r);const a=Yh(r,o);let c,u;if(i.merge)c=new jt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=$o(e,l,t);if(!o.contains(d))throw new p(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Jh(h,d)||h.push(d)}c=new jt(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new Bp(new he(a),c,u)}class dr extends At{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dr}}function Qh(n,e,t){return new Ds({kc:3,Kc:e.settings.Kc,methodName:n._methodName,Fc:t},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Po extends At{_toFieldTransform(e){return new Yn(e.path,new Wt)}isEqual(e){return e instanceof Po}}class Kp extends At{constructor(e,t){super(e),this.Qc=t}_toFieldTransform(e){const t=Qh(this,e,!0),r=this.Qc.map(i=>Dt(i,t)),s=new vt(r);return new Yn(e.path,s)}isEqual(e){return this===e}}class zp extends At{constructor(e,t){super(e),this.Qc=t}_toFieldTransform(e){const t=Qh(this,e,!0),r=this.Qc.map(i=>Dt(i,t)),s=new Et(r);return new Yn(e.path,s)}isEqual(e){return this===e}}class Gp extends At{constructor(e,t){super(e),this.Wc=t}_toFieldTransform(e){const t=new Yt(e.N,Qc(e.N,this.Wc));return new Yn(e.path,t)}isEqual(e){return this===e}}function Fo(n,e,t,r){const s=n.jc(1,e,t);Uo("Data must be an object, but it was:",s,r);const i=[],o=he.empty();pt(r,(c,u)=>{const h=qo(e,c,t);u=B(u);const l=s.Lc(h);if(u instanceof dr)i.push(h);else{const d=Dt(u,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new jt(i);return new Gh(o,a,s.fieldTransforms)}function Vo(n,e,t,r,s,i){const o=n.jc(1,e,t),a=[$o(e,r,t)],c=[s];if(i.length%2!=0)throw new p(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push($o(e,i[d])),c.push(i[d+1]);const u=[],h=he.empty();for(let d=a.length-1;d>=0;--d)if(!Jh(u,a[d])){const m=a[d];let w=c[d];w=B(w);const b=o.Lc(m);if(w instanceof dr)u.push(m);else{const D=Dt(w,b);D!=null&&(u.push(m),h.set(m,D))}}const l=new jt(u);return new Gh(h,l,o.fieldTransforms)}function Wh(n,e,t,r=!1){return Dt(t,n.jc(r?4:3,e))}function Dt(n,e){if(Xh(n=B(n)))return Uo("Unsupported field value:",e,n),Yh(n,e);if(n instanceof At)return function(t,r){if(!Hh(r.kc))throw r.Uc(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Dt(o,r.Bc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=B(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Qc(r.N,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=X.fromDate(t);return{timestampValue:tr(r.N,s)}}if(t instanceof X){const s=new X(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:tr(r.N,s)}}if(t instanceof Ns)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Me)return{bytesValue:mu(r.N,t._byteString)};if(t instanceof M){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gi(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.Uc(`Unsupported field value: ${_s(t)}`)}(n,e)}function Yh(n,e){const t={};return kc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pt(n,(r,s)=>{const i=Dt(s,e.Oc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Xh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Ns||n instanceof Me||n instanceof M||n instanceof At)}function Uo(n,e,t){if(!Xh(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=_s(t);throw r==="an object"?e.Uc(n+" a custom object"):e.Uc(n+" "+r)}}function $o(n,e,t){if((e=B(e))instanceof rt)return e._internalPath;if(typeof e=="string")return qo(n,e);throw xs("Field path arguments must be of type string or FieldPath.",n,!1,void 0,t)}const Hp=new RegExp("[~\\*/\\[\\]]");function qo(n,e,t){if(e.search(Hp)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new rt(...e.split("."))._internalPath}catch{throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xs(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new p(f.INVALID_ARGUMENT,a+n+c)}function Jh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new M(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ks("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Qp extends fr{data(){return super.data()}}function ks(n,e){return typeof e=="string"?qo(n,e):e instanceof rt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Be extends fr{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ks("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class mr extends Be{data(e={}){return super.data(e)}}class st{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ct(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mr(this._firestore,this._userDataWriter,r.key,r,new Ct(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new mr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ct(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new mr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ct(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Wp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Wp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}function Zh(n,e){return n instanceof Be&&e instanceof Be?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof st&&e instanceof st&&n._firestore===e._firestore&&Bh(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){if(ss(n)&&n.explicitOrderBy.length===0)throw new p(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gr{}function it(n,...e){for(const t of e)n=t._apply(n);return n}class Yp extends gr{constructor(e,t,r){super(),this.Gc=e,this.zc=t,this.Hc=r,this.type="where"}_apply(e){const t=Nt(e.firestore),r=function(s,i,o,a,c,u,h){let l;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new p(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on FieldPath.documentId().`);if(u==="in"||u==="not-in"){ol(h,u);const m=[];for(const w of h)m.push(il(a,s,w));l={arrayValue:{values:m}}}else l=il(a,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ol(h,u),l=Wh(o,i,h,u==="in"||u==="not-in");const d=pe.create(c,u,l);return function(m,w){if(w.v()){const D=$i(m);if(D!==null&&!D.isEqual(w.field))throw new p(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${D.toString()}' and '${w.field.toString()}'`);const q=Ui(m);q!==null&&al(m,w.field,q)}const b=function(D,q){for(const at of D.filters)if(q.indexOf(at.op)>=0)return at.op;return null}(m,function(D){switch(D){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(w.op));if(b!==null)throw b===w.op?new p(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${w.op.toString()}' filter.`):new p(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${w.op.toString()}' filters with '${b.toString()}' filters.`)}(s,d),d}(e._query,"where",t,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new de(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Ve(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function Xp(n,e,t){const r=e,s=ks("where",n);return new Yp(s,r,t)}class Jp extends gr{constructor(e,t){super(),this.Gc=e,this.Jc=t,this.type="orderBy"}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new p(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new p(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Gt(s,i);return function(a,c){if(Ui(a)===null){const u=$i(a);u!==null&&al(a,u,c.field)}}(r,o),o}(e._query,this.Gc,this.Jc);return new de(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Ve(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Zp(n,e="asc"){const t=e,r=ks("orderBy",n);return new Jp(r,t)}class tl extends gr{constructor(e,t,r){super(),this.type=e,this.Yc=t,this.Xc=r}_apply(e){return new de(e.firestore,e.converter,jc(e._query,this.Yc,this.Xc))}}function ey(n){return Vh("limit",n),new tl("limit",n,"F")}function ty(n){return Vh("limitToLast",n),new tl("limitToLast",n,"L")}class nl extends gr{constructor(e,t,r){super(),this.type=e,this.Zc=t,this.ta=r}_apply(e){const t=sl(e,this.type,this.Zc,this.ta);return new de(e.firestore,e.converter,function(r,s){return new Ve(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,t))}}function ny(...n){return new nl("startAt",n,!0)}function ry(...n){return new nl("startAfter",n,!1)}class rl extends gr{constructor(e,t,r){super(),this.type=e,this.Zc=t,this.ta=r}_apply(e){const t=sl(e,this.type,this.Zc,this.ta);return new de(e.firestore,e.converter,function(r,s){return new Ve(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,t))}}function sy(...n){return new rl("endBefore",n,!0)}function iy(...n){return new rl("endAt",n,!1)}function sl(n,e,t,r){if(t[0]=B(t[0]),t[0]instanceof fr)return function(s,i,o,a,c){if(!a)throw new p(f.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const h of Qt(s))if(h.field.isKeyField())u.push(Jr(i,a.key));else{const l=a.data.field(h.field);if(Oi(l))throw new p(f.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(l===null){const d=h.field.canonicalString();throw new p(f.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(l)}return new Hn(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Nt(n.firestore);return function(i,o,a,c,u,h){const l=i.explicitOrderBy;if(u.length>l.length)throw new p(f.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let m=0;m<u.length;m++){const w=u[m];if(l[m].field.isKeyField()){if(typeof w!="string")throw new p(f.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof w}`);if(!qi(i)&&w.indexOf("/")!==-1)throw new p(f.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${c}() must be a plain document ID, but '${w}' contains a slash.`);const b=i.path.child(R.fromString(w));if(!I.isDocumentKey(b))throw new p(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const D=new I(b);d.push(Jr(o,D))}else{const b=Wh(a,c,w);d.push(b)}}return new Hn(d,h)}(n._query,n.firestore._databaseId,s,e,t,r)}}function il(n,e,t){if(typeof(t=B(t))=="string"){if(t==="")throw new p(f.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!qi(e)&&t.indexOf("/")!==-1)throw new p(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(R.fromString(t));if(!I.isDocumentKey(r))throw new p(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jr(n,new I(r))}if(t instanceof M)return Jr(n,t._key);throw new p(f.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${_s(t)}.`)}function ol(n,e){if(!Array.isArray(n)||n.length===0)throw new p(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new p(f.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function al(n,e,t){if(!t.isEqual(e))throw new p(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{convertValue(e,t="none"){switch(wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const r={};return pt(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Ns(z(e.latitude),z(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Rc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jn(e));default:return null}}convertTimestamp(e){const t=Qe(e);return new X(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=R.fromString(e);S(Nu(r));const s=new wn(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(t)||K(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class oy extends Bo{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new M(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Nt(e)}set(e,t,r){this._verifyNotCommitted();const s=ot(e,this._firestore),i=Rs(s.converter,t,r),o=Cs(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,G.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=ot(e,this._firestore);let o;return o=typeof(t=B(t))=="string"||t instanceof rt?Vo(this._dataReader,"WriteBatch.update",i._key,t,r,s):Fo(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,G.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ot(e,this._firestore);return this._mutations=this._mutations.concat(new Jn(t._key,G.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ot(n,e){if((n=B(n)).firestore!==e)throw new p(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n){n=x(n,M);const e=x(n.firestore,$);return Rh(te(e),n._key).then(t=>jo(e,n,t))}class xt extends Bo{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new M(this.firestore,null,t)}}function uy(n){n=x(n,M);const e=x(n.firestore,$),t=te(e),r=new xt(e);return Ip(t,n._key).then(s=>new Be(e,r,n._key,s,new Ct(s!==null&&s.hasLocalMutations,!0),n.converter))}function hy(n){n=x(n,M);const e=x(n.firestore,$);return Rh(te(e),n._key,{source:"server"}).then(t=>jo(e,n,t))}function ly(n){n=x(n,de);const e=x(n.firestore,$),t=te(e),r=new xt(e);return el(n._query),Lh(t,n._query).then(s=>new st(e,r,n,s))}function dy(n){n=x(n,de);const e=x(n.firestore,$),t=te(e),r=new xt(e);return Tp(t,n._query).then(s=>new st(e,r,n,s))}function fy(n){n=x(n,de);const e=x(n.firestore,$),t=te(e),r=new xt(e);return Lh(t,n._query,{source:"server"}).then(s=>new st(e,r,n,s))}function cl(n,e,t){n=x(n,M);const r=x(n.firestore,$),s=Rs(n.converter,e,t);return pr(r,[Cs(Nt(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,G.none())])}function ul(n,e,t,...r){n=x(n,M);const s=x(n.firestore,$),i=Nt(s);let o;return o=typeof(e=B(e))=="string"||e instanceof rt?Vo(i,"updateDoc",n._key,e,t,r):Fo(i,"updateDoc",n._key,e),pr(s,[o.toMutation(n._key,G.exists(!0))])}function my(n){return pr(x(n.firestore,$),[new Jn(n._key,G.none())])}function gy(n,e){const t=x(n.firestore,$),r=As(n),s=Rs(n.converter,e);return pr(t,[Cs(Nt(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,G.exists(!1))]).then(()=>r)}function hl(n,...e){var t,r,s;n=B(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mo(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Mo(e[o])){const l=e[o];e[o]=(t=l.next)===null||t===void 0?void 0:t.bind(l),e[o+1]=(r=l.error)===null||r===void 0?void 0:r.bind(l),e[o+2]=(s=l.complete)===null||s===void 0?void 0:s.bind(l)}let c,u,h;if(n instanceof M)u=x(n.firestore,$),h=Ht(n._key.path),c={next:l=>{e[o]&&e[o](jo(u,n,l))},error:e[o+1],complete:e[o+2]};else{const l=x(n,de);u=x(l.firestore,$),h=l._query;const d=new xt(u);c={next:m=>{e[o]&&e[o](new st(u,d,l,m))},error:e[o+1],complete:e[o+2]},el(n._query)}return function(l,d,m,w){const b=new bs(w),D=new To(d,b,m);return l.asyncQueue.enqueueAndForget(async()=>vo(await yn(l),D)),()=>{b.ec(),l.asyncQueue.enqueueAndForget(async()=>Eo(await yn(l),D))}}(te(u),h,a,c)}function py(n,e){return bp(te(n=x(n,$)),Mo(e)?e:{next:e})}function pr(n,e){return function(t,r){const s=new Y;return t.asyncQueue.enqueueAndForget(async()=>Jg(await Lo(t),r,s)),s.promise}(te(n),e)}function jo(n,e,t){const r=t.docs.get(e._key),s=new xt(n);return new Be(n,s,e._key,r,new Ct(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Nt(e)}get(e){const t=ot(e,this._firestore),r=new oy(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return T();const i=s[0];if(i.isFoundDocument())return new fr(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new fr(this._firestore,r,t._key,null,t.converter);throw T()})}set(e,t,r){const s=ot(e,this._firestore),i=Rs(s.converter,t,r),o=Cs(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=ot(e,this._firestore);let o;return o=typeof(t=B(t))=="string"||t instanceof rt?Vo(this._dataReader,"Transaction.update",i._key,t,r,s):Fo(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=ot(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ot(e,this._firestore),r=new xt(this._firestore);return super.get(e).then(s=>new Be(this._firestore,r,t._key,s._document,new Ct(!1,!1),t.converter))}}function wy(n,e){return Sp(te(n=x(n,$)),t=>e(new yy(n,t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(){return new dr("deleteField")}function Ey(){return new Po("serverTimestamp")}function Iy(...n){return new Kp("arrayUnion",n)}function Ty(...n){return new zp("arrayRemove",n)}function by(n){return new Gp("increment",n)}(function(n,e=!0){(function(t){qt=t})($s),In(new Mt("firestore",(t,{options:r})=>{const s=t.getProvider("app").getImmediate(),i=new $(s,new Zf(t.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ke(Ac,"3.2.1",n),Ke(Ac,"3.2.1","esm2017")})();const Sy="@firebase/firestore-compat",_y="0.1.6";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new p("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){if(typeof Uint8Array=="undefined")throw new p("unimplemented","Uint8Arrays are not available in this environment.")}function dl(){if(!sm())throw new p("unimplemented","Blobs are unavailable in Firestore in this environment.")}class yr{constructor(e){this._delegate=e}static fromBase64String(e){return dl(),new yr(Me.fromBase64String(e))}static fromUint8Array(e){return ll(),new yr(Me.fromUint8Array(e))}toBase64(){return dl(),this._delegate.toBase64()}toUint8Array(){return ll(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n){return Ay(n,["next","error","complete"])}function Ay(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{enableIndexedDbPersistence(e,t){return Lp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Op(e._delegate)}clearIndexedDbPersistence(e){return Mp(e._delegate)}}class fl{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof wn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&qn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Dp(this._delegate,e,t,r)}enableNetwork(){return Fp(this._delegate)}disableNetwork(){return Vp(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Mh("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Pp(this._delegate)}onSnapshotsInSync(e){return py(this._delegate,e)}get app(){if(!this._appCompat)throw new p("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new vn(this,$h(this._delegate,e))}catch(t){throw ye(t,"collection()","Firestore.collection()")}}doc(e){try{return new De(this,As(this._delegate,e))}catch(t){throw ye(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new we(this,Cp(this._delegate,e))}catch(t){throw ye(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return wy(this._delegate,t=>e(new ml(this,t)))}batch(){return te(this._delegate),new gl(new ay(this._delegate,e=>pr(this._delegate,e)))}loadBundle(e){return Up(this._delegate,e)}namedQuery(e){return $p(this._delegate,e).then(t=>t?new we(this,t):null)}}class Ls extends Bo{constructor(e){super();this.firestore=e}convertBytes(e){return new yr(new Me(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return De.forKey(t,this.firestore,null)}}function Dy(n){Wf(n)}class ml{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Ls(e)}get(e){const t=Rt(e);return this._delegate.get(t).then(r=>new wr(this._firestore,new Be(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=Rt(e);return r?(Ko("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=Rt(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=Rt(e);return this._delegate.delete(t),this}}class gl{constructor(e){this._delegate=e}set(e,t,r){const s=Rt(e);return r?(Ko("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=Rt(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=Rt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class kt{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new mr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new vr(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=kt.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new kt(e,new Ls(e),t),s.set(t,i)),i}}kt.INSTANCES=new WeakMap;class De{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ls(e)}static forPath(e,t,r){if(e.length%2!=0)throw new p("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new De(t,new M(t._delegate,r,new I(e)))}static forKey(e,t,r){return new De(t,new M(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new vn(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new vn(this.firestore,$h(this._delegate,e))}catch(t){throw ye(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof M?qh(this._delegate,e):!1}set(e,t){t=Ko("DocumentReference.set",t);try{return t?cl(this._delegate,e,t):cl(this._delegate,e)}catch(r){throw ye(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?ul(this._delegate,e):ul(this._delegate,e,t,...r)}catch(s){throw ye(s,"updateDoc()","DocumentReference.update()")}}delete(){return my(this._delegate)}onSnapshot(...e){const t=pl(e),r=yl(e,s=>new wr(this.firestore,new Be(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return hl(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=uy(this._delegate):(e==null?void 0:e.source)==="server"?t=hy(this._delegate):t=cy(this._delegate),t.then(r=>new wr(this.firestore,new Be(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new De(this.firestore,e?this._delegate.withConverter(kt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ye(n,e,t){return n.message=n.message.replace(e,t),n}function pl(n){for(const e of n)if(typeof e=="object"&&!zo(e))return e;return{}}function yl(n,e){var t,r;let s;return zo(n[0])?s=n[0]:zo(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class wr{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new De(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Zh(this._delegate,e._delegate)}}class vr extends wr{data(e){const t=this._delegate.data(e);return Yf(t!==void 0),t}}class we{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ls(e)}where(e,t,r){try{return new we(this.firestore,it(this._delegate,Xp(e,t,r)))}catch(s){throw ye(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new we(this.firestore,it(this._delegate,Zp(e,t)))}catch(r){throw ye(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new we(this.firestore,it(this._delegate,ey(e)))}catch(t){throw ye(t,"limit()","Query.limit()")}}limitToLast(e){try{return new we(this.firestore,it(this._delegate,ty(e)))}catch(t){throw ye(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new we(this.firestore,it(this._delegate,ny(...e)))}catch(t){throw ye(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new we(this.firestore,it(this._delegate,ry(...e)))}catch(t){throw ye(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new we(this.firestore,it(this._delegate,sy(...e)))}catch(t){throw ye(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new we(this.firestore,it(this._delegate,iy(...e)))}catch(t){throw ye(t,"endAt()","Query.endAt()")}}isEqual(e){return Bh(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=dy(this._delegate):(e==null?void 0:e.source)==="server"?t=fy(this._delegate):t=ly(this._delegate),t.then(r=>new Go(this.firestore,new st(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=pl(e),r=yl(e,s=>new Go(this.firestore,new st(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return hl(this._delegate,t,r)}withConverter(e){return new we(this.firestore,e?this._delegate.withConverter(kt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Cy{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new vr(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Go{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new we(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new vr(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Cy(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new vr(this._firestore,r))})}isEqual(e){return Zh(this._delegate,e._delegate)}}class vn extends we{constructor(e,t){super(e,t);this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new De(this.firestore,e):null}doc(e){try{return e===void 0?new De(this.firestore,As(this._delegate)):new De(this.firestore,As(this._delegate,e))}catch(t){throw ye(t,"doc()","CollectionReference.doc()")}}add(e){return gy(this._delegate,e).then(t=>new De(this.firestore,t))}isEqual(e){return qh(this._delegate,e._delegate)}withConverter(e){return new vn(this.firestore,e?this._delegate.withConverter(kt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Rt(n){return x(n,M)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(...e){this._delegate=new rt(...e)}static documentId(){return new Ho(oe.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof rt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._delegate=e}static serverTimestamp(){const e=Ey();return e._methodName="FieldValue.serverTimestamp",new Lt(e)}static delete(){const e=vy();return e._methodName="FieldValue.delete",new Lt(e)}static arrayUnion(...e){const t=Iy(...e);return t._methodName="FieldValue.arrayUnion",new Lt(t)}static arrayRemove(...e){const t=Ty(...e);return t._methodName="FieldValue.arrayRemove",new Lt(t)}static increment(e){const t=by(e);return t._methodName="FieldValue.increment",new Lt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={Firestore:fl,GeoPoint:Ns,Timestamp:X,Blob:yr,Transaction:ml,WriteBatch:gl,DocumentReference:De,DocumentSnapshot:wr,Query:we,QueryDocumentSnapshot:vr,QuerySnapshot:Go,CollectionReference:vn,FieldPath:Ho,FieldValue:Lt,setLogLevel:Dy,CACHE_SIZE_UNLIMITED:Rp};function ky(n,e){n.INTERNAL.registerComponent(new Mt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},xy)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n){ky(n,(e,t)=>new fl(e,t,new Ny)),n.registerVersion(Sy,_y)}Ry(ha);export{ha as f};
