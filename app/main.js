import React from 'react';
import ReactDOM from 'react-dom';
import LogComponent from './components/LogComponent.js';
import InputComponent from './components/InputComponent.js';
import SelectComponent from './components/SelectComponent.js';
import style from './components/css/input.css';



var log = ReactDOM.render(
  <LogComponent msg="输入Log"/>,
  document.getElementById('toast')
);


var form = ReactDOM.render(
	<form>
		<SelectComponent data={["A","b","C","D","e"]} class="s" optionClass="o"/>
		<InputComponent style="display:block;width:100%;;" log={LogComponent} type="hidden" valType="OTHER"  value="隐藏数据"/>
		<InputComponent style=";display:block;width:100%;" log={LogComponent} type="text" valType="TEL" placeholder="请输入手机" error="请检查手机号码格式" />
		<InputComponent style="display:block;;width:100%;" log={LogComponent} type="text" valType="NUMBER" placeholder="请输入数字" error="请检查数字格式" />
		<InputComponent log={log} class={style.input} type="text" valType="URL" placeholder="请输入URL" error="请检查URL格式" />
		<InputComponent style="display:block;width:100%;" log={LogComponent} type="reset" valType="OTHER" value="清除"/>
	</form>
  ,
  document.getElementById('content')
);