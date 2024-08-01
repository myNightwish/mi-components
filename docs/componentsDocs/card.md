# card 卡片组件

### 操作示例
<mi-card
  :width="180"
  imgSrc='/vue-md.png'
  :imgHeight="200"
/>

### 代码

```
<mi-card
  :width="180"
  imgSrc='/vue-md.png'
  :imgHeight="200"
  sumary="hello"
/>
```

### attributes
| 参数       | 说明      | 类型            | 可选值       | 默认值   |
|-----------|-----------|--------------- |------------ |-------- |
| width     | 卡片宽度   | Number         | --          | 100%    |
| imgSrc    | 图片地址   | String         | --          | --      |
| imgHeight | 图片高度   | Number         | --          | 200     |
| sumary    | 概要      | String/slot     | false--     | --      |
|footer     | 底部      | String/slot     | false--     | --      |


