# mi-components 组件库


### 快捷开始


#### 1、安装

```bash
npm install mi-components
```

### 2、引用
> 在 main.js 中引用组件库
```js
// 全部引用
import MiComponents from 'mi-components'
import 'mi-components/dist/css/index.css'
Vue.use(MiComponents)

// 按需引用
import { miCard } from 'mi-components'
import 'mi-components/dist/css/button.css'
Vue.use(miCard)
```
