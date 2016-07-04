import React from 'react';


export default class InputComponent extends React.Component {
  constructor() {
    super();
    var scope = this;
    this.state = {};

    /**
     * 手机号码:
     * 13[0-9], 14[5,7], 15[0, 1, 2, 3, 5, 6, 7, 8, 9], 17[6, 7, 8], 18[0-9], 170[0-9]
     * 移动号段: 134,135,136,137,138,139,150,151,152,157,158,159,182,183,184,187,188,147,178,1705
     * 联通号段: 130,131,132,155,156,185,186,145,176,1709
     * 电信号段: 133,153,180,181,189,177,1700
     */

    //定义默认的验证规则
  	this.defaultVal = {
		NUMBER : "^[0-9]*$",
		TEL:"(^1(3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\\d{8}$)|(^1705\\d{7}$)",
		IP:"^((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])$",
		MOBILE:"(^1(3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\\d{8}$)|(^1705\\d{7}$)",
		MAIL:"^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$",
		IDENTITY:"((11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91)\\d{4})((((19|20)(([02468][048])|([13579][26]))0229))|((20[0-9][0-9])|(19[0-9][0-9]))((((0[1-9])|(1[0-2]))((0[1-9])|(1\\d)|(2[0-8])))|((((0[1,3-9])|(1[0-2]))(29|30))|(((0[13578])|(1[02]))31))))((\\d{3}(x|X))|(\\d{4}))",
		CHINESE:"^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$",
		URL:"^http[s]?://[\\w\\.\\-]+$"
	};

    this.match = this.match.bind(this);
    this.blured = this.blured.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  log(msg){
  	this.props.log.show(msg);
  }

  match(para) {
	var flag=false;
	if(para.rule=='OTHER') {
		//自定义的验证规则匹配
		flag=new RegExp(para.regString).test(para.data);
	}
	else {
		if(para.rule in this.defaultVal) {
			//默认的验证规则匹配
			flag=new RegExp(this.defaultVal[para.rule]).test(para.data);
		}
	}
	return flag;
  }
  

  validBefore() {
  	var props = this.props;
  	var value = this.state.value;

  	//验证通过标识
	var flag=true;
	//获取验证类型
	var valType=props.valType;
	//获取验证不通过时的提示信息
	var msg=props.msg;
	//自定义的验证字符串
	var regString;
	// debugger;
	if(valType=='OTHER') {//如果类型是自定义，则获取自定义的验证字符串
		regString=props.regString;
		flag=value!=''&&this.match({data:value, rule:props.valType, regString:props.regString});

	}
	else {//如果类型不是自定义，则匹配默认的验证规则进行验证
		if(props.valType=='required') {//不能为空的判断
			if(value=='') {
				flag=false;
			}
		}
		else {//已定义规则的判断
			flag=value!=''&&this.match({data:value, rule:props.valType});
		}
	}

	//如果验证没有通过，显示tips
	if(!flag) {
		this.log(this.props.error);
	}

  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  blured(e) {
  	this.validBefore();
  }

  render() {
  	console.log(this.props.style);
    return (
    	<input 
	    	onBlur={this.blured} 

	    	type={this.props.type}
	    	name={this.props.name}
	    	defaultValue={this.props.value}
	    	defaultChecked={this.props.checked}
	    	placeholder={this.props.placeholder}
	    	maxLength={this.props.maxlength}
	    	onChange={this.handleChange}
	    	// style={this.props.style}
	    	className={this.props.class}
    	/>
    	);
  }
}