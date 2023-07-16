import { createApp } from 'vue'
import { setupStore } from './store';
import { onUpdate  } from './utils'
import './app.scss'

const App = createApp({
  
  onShow (options) {
    onUpdate()
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

setupStore(App)

export default App
