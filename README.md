# React-form-component

####通用组件原型
![image](http://www.jq-school.com/attached/image/20130110/20130110121853_1875.jpg)

####Css加载器
>
+ "css-loader": "^0.12.0",
+ "react-style": "^0.5.5",
+ "react-style-webpack-plugin": "0.4.0",
+ "style-loader": "^0.12.1",
> 解决方案是样式与组件分离，采用单一css文件方式进行处理


####循环子组件
>
```
<option className={self.props.optionClass} value={d} key={i}>{d}</option>
```
注意此需要key,不然会报错
> Warning: Each child in an array or iterator should have a unique "key" prop. 
![image](http://img2.tbcdn.cn/L1/461/1/ffd42a4b6fbe6a5ac96fd0381ade041296ec077f.png)


####bind(this)
组件中定义的函数，不一定都要求进行bind(this),假如你的函数要求传入参数时，此时bind(this)就不需要了

React.createClass方法在你的组件上做了一些额外的绑定工作，以确保在组件实实例的方法内部，this指向的是组件实例自身。
```
// Autobinding, brought to you by React.createClass
var PostInfo = React.createClass({
  handleOptionsButtonClick: function(e) {
    // Here, 'this' refers to the component instance.
    this.setState({showOptionsModal: true});
  },
});
```


由于我们使用 ES6+ 的语法定义类的时候没有采用React.createClass的方式，所以，这样看来我们不得不手动来绑定这些方法中this的指向：

```
// Manually bind, wherever you need to
class PostInfo extends React.Component {
  constructor(props) {
    super(props);
    // Manually bind this method to the component instance...
    this.handleOptionsButtonClick = this.handleOptionsButtonClick.bind(this);
  }
  handleOptionsButtonClick(e) {
    // ...to ensure that 'this' refers to the component instance here.
    this.setState({showOptionsModal: true});
  }
}
```

幸运的是，通过 ES6+ 的箭头函数（ Arrow functions ）和属性初始化（ property initializers ）这两个特性使得把函数的this指向绑定为组件的实例变得非常的简单：

```
class PostInfo extends React.Component {
  handleOptionsButtonClick = (e) => {
    this.setState({showOptionsModal: true});
  }
}
```

函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象。而恰好属性初始化（ property initializers ）刚好在这个作用域内。

####非父子组件间的通讯



####Log组件的封装及使用