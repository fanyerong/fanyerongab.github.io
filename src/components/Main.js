import React from 'react';
require('styles/reset.css');
require('styles/App.css');
import Info from './Info.js'




class AppComponent extends React.Component {
	constructor(){
		super()
		this.state={
			name:{
				title:'基本信息',
				de:['姓   名：范叶荣','年龄：23岁','民   族：汉  族','现 居 地 :  北  京','电   话：18310963932','政治面貌 :  团  员','邮   箱：1763645518@qq.com','工作经验 :  三 年']
			},
			name1:{
				title:'求职意向',
				de:['期望职位：WEB前端工程师','职位类型：全职','期望月薪：11k-12k/月','目前状况：离职（可随时到岗）']
			},
			name2:{
				title:'专业技能',
				de:['1、掌握W3C规范，能够熟练运用DIV+CSS、CSS3、HTML5、Javascript、JQuery，ajax 等技术来完成PC端布局及交互效果；','2、熟悉并使用rem布局、弹性布局、媒体查询等网页布局技术；','3、熟练运用HTML5技术搭建移动端页面，并且熟练解决适配等问题；','4、熟悉HTML5本地存储、离线缓存、地理位置定位等HTML新特性及技术；','5、熟悉媒体查询，熟悉Bootstrap框架，能够制作符合规范的响应式网站；','6、熟练运用Swiper.JS、AngularJS、React等框架；','6.了解node.js，能用express框架调取mysql数据库实现简单的增删改查等业务逻辑；','7、优秀的沟通、协调能力，掌握GIT使用流程，能够多人协同开发。']
			}
		}
	}	
	render() {
    return (
      <div className="Content">
		<h1>个人简历</h1>
		<Info aaa={this.state.name}/>
		<Info aaa={this.state.name1}/>
		<Info aaa={this.state.name2}/>
	  </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
