$(function(){
	//首页第一个图
	 var drawmoney1=new drawIndexBar('drawmoney1');
	drawmoney1.init(drawmoneyData1);
	//首页第二个图
	var drawmoney2=new drawIndexBar('drawmoney2');
	drawmoney2.init(drawmoneyData2);
	$(window).resize(function(){
		 drawmoney1.myChart.resize() 
		 drawmoney2.myChart.resize();
	})

})
//jsonData

var drawmoneyData1={
		title:'项目资金需求情况', 
		legendData:['推介','储备','普通','投产','重大','签约','待建'], //此字段如为动态后台需要传入 
		xData:['2016', '2017'], //此字段年份为动态后台需要传入 
		yData:[{	//Y轴数据后台传入
			        name: '推介',
			        type: 'bar',
			        data: [ 1300, 1420], //data数据对应年份
			         
			    }, {
			        name: '储备',
			        type: 'bar',
			        data: [1050, 1820],
			        
			    }, {
			        name: '普通',
			        type: 'bar',
			        data: [1550, 1624],
			        
			    }, {
			        name: '投产',
			        type: 'bar',
			        data: [870, 982],
			        
			    }, {
			        name: '重大',
			        type: 'bar',
			        data: [670, 382],
			        
			    }, {
			        name: '签约',
			        type: 'bar',
			        data: [770, 482],
			        
			    }, {
			        name: '待建',
			        type: 'bar',
			        data: [1870, 582],
			        
			    }]
};

var drawmoneyData2={
		title:'项目数量统计汇总', 
		legendData:['推介','不准入','签约','待建','重大','储备','普通','投产'], //此字段如为动态后台需要传入 
		xData:['2016', '2017'], //此字段年份为动态后台需要传入 
		yData:[{	//Y轴数据后台传入
			        name: '推介',
			        type: 'bar',
			        data: [ 1300, 1420], //data数据对应年份
			         
			    }, {
			        name: '不准入',
			        type: 'bar',
			        data: [1050, 1820],
			        
			    }, {
			        name: '签约',
			        type: 'bar',
			        data: [1550, 1624],
			        
			    }, {
			        name: '待建',
			        type: 'bar',
			        data: [870, 982],
			        
			    }, {
			        name: '重大',
			        type: 'bar',
			        data: [820, 382],
			        
			    }, {
			        name: '储备',
			        type: 'bar',
			        data: [830, 482],
			        
			    }, {
			        name: '普通',
			        type: 'bar',
			        data: [810, 682],
			        
			    }, {
			        name: '投产',
			        type: 'bar',
			        data: [240, 582],
			        
			    }]
};


 /*基础线柱图表*/
function drawIndexBar(dom) {
    	  this.dom = dom;
  			this.myChart = echarts.init(document.getElementById(dom));
 			this.opts = {
				title: {
			    	left:'5%',
			    	top:'3%',
			        text: '',
			        textStyle: {
			            fontSize: 12,
			            color:'#666'
			        }
			    },
			    backgroundColor:'#fff',
			    tooltip: {
			        trigger: 'axis',
			    },
			    calculable: true,
			   legend: {
			        top:'1%',
			        right:'2%',
			        itemGap: 10,
	 				width:'60%',
	 				itemWidth: 8,             // 图例图形宽度
			        itemHeight:8,            // 图例图形高度
			        textStyle:{
			            color:'#585858',
			          	padding: [0,1,0,0]
			        },
			        data:[],
			        icon:'circle'
			    },
			    xAxis: [{
			        type: 'category',
			        data: [],
			        axisLine: {
			            lineStyle: {
			                color: "red",
			                width: 1
			            }
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            formatter: '{value}'
			            ,textStyle:{
			                color:'#333'
			            }
			        },splitLine: {
						show: true,
						
					},
			    }],
			    color:["#fe4f56","#4c3bf1","#0975ef","#b01adb","#27d785","#19d3ef","#ec910c"],
			    yAxis: [{
			        min:0,
			       // max:'2000',
			        type: 'value',
			        name: '',
			        axisLabel: {
			            formatter: '{value}',
			            textStyle:{
			                color:'#333',
			             
			            }
			        },
			        axisLine: {
			            lineStyle: {
			                color: "red",
			                width: 1
			            }
			        },
			        splitLine: {
						show: true,
						lineStyle: {
							color: '#ccc',
							type : "solid"
						}
					},	
					axisTick: {
						show: false
					},
			    }],
			    grid: {
			        x: '60',
			        x2: '30',
			        y2:70
			     
			    },
			    series: []
    	}
 	}
 drawIndexBar.prototype.init = function(data){
 	 this.opts.title.text=data.title;
 	 this.opts.legend.data=data.legendData;
	 this.opts.xAxis[0].data = data.xData;
	 this.opts.series = data.yData;
	 this.myChart.setOption(this.opts);
		 
}
 
 function drawIndexBar1(dom) {
    	  this.dom = dom;
  			this.myChart = echarts.init(document.getElementById(dom));
 			this.opts = {
				title: {
			    	left:'5%',
			    	top:'3%',
			        text: '',
			        textStyle: {
			            fontSize: 12,
			            color:'#666'
			        }
			    },
			    backgroundColor:'#fff',
			    tooltip: {
			        trigger: 'axis',
			        confine:true
			    },
			    calculable: true,
			   legend: {
			   		top:'2%',
			   	 	aligin:'left',
			        itemGap: 10,
	 				itemWidth: 8,             // 图例图形宽度
			        itemHeight:8,            // 图例图形高度		  
			        textStyle:{
			            color:'#585858',
			            padding: [0,25,0,0]
			        },
			        data:[],
			        icon:'circle'
			    },
			    xAxis: [{
			        type: 'category',
			        data: [],
			        axisLine: {
			            lineStyle: {
			                color: "red",
			                width: 1
			            }
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            formatter: '{value}'
			            ,textStyle:{
			                color:'#333'
			            }
			        },splitLine: {
						show: true,
						
					},
			    }],
			    color:["#fe4f56","#4c3bf1","#0975ef","#b01adb","#27d785","#19d3ef","#ec910c"],
			    yAxis: [{
			        min:0,
			       // max:'2000',
			        type: 'value',
			        name: '',
			        axisLabel: {
			            formatter: '{value}',
			            textStyle:{
			                color:'#333'
			            }
			        },
			        axisLine: {
			            lineStyle: {
			                color: "red",
			                width: 1
			            }
			        },
			        splitLine: {
						show: true,
						lineStyle: {
							color: '#ccc',
							type : "solid"
						}
					},	
					axisTick: {
						show: false
					},
			    }],
			    grid: {
			        x: '60',
			        y:70,
			        x2: '30',
			        y2:30
			     
			    },
			    series: []
    	}
 	}
 drawIndexBar1.prototype.init = function(data){
 	 this.opts.title.text=data.title;
 	 this.opts.legend.data=data.legendData;
	 this.opts.xAxis[0].data = data.xData;
	 this.opts.series = data.yData;
	 this.myChart.setOption(this.opts);
 
	} 
 


