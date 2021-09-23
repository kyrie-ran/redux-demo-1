# redux-dome-1
学习redux

应用中所有的state都以一个对象树的形式存储在一个单一的store中。惟一改变state的办法是触发action，一个描述发生什么的对象。
为了描述action如果改变state树，你需要编写reducers。

## Redux 三大原则
### 单一数据源
整个应用的state被存储在一颗object tree中，并且这个object tree只存在于唯一一个store中。

### State 是只读的
唯一改变 state 的方法是触发 action，action 是一个用于描述已发生事件的普通对象。

### 使用纯函数来执行修改
为了描述 action 如果改变 state tree，你需要编写reducers。