# React-form-component

####通用组件原型
![image](http://www.jq-school.com/attached/image/20130110/20130110121853_1875.jpg)

####Css加载器
>
+ "css-loader": "^0.12.0",
+ "react-style": "^0.5.5",
+ "react-style-webpack-plugin": "0.4.0",
+ "style-loader": "^0.12.1",


####循环子组件
><option className={self.props.optionClass} value={d} key={i}>{d}</option>
+ 注意此需要key,不然会报错
> Warning: Each child in an array or iterator should have a unique "key" prop. 

####非父子组件间的通讯



####Log组件的封装及使用