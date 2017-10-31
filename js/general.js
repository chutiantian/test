$(function(){
	var drawmoney2=new drawIndexBar('drawmoney2');
	drawmoney2.init(drawmoneyData2);
	//各县市招标统计
		var secondarea=new secondArea('second-area');
		secondarea.init(secondAreaData);
		
		$(window).resize(function(){
		 secondarea.myChart.resize() 
		 drawmoney2.myChart.resize();
	})
	})
 /*各县市区招商项目数统计data*/
var secondAreaData={
		title:'各县市区招商项目数统计', 
		xData:['市辖区','寿光市','诸城市', '青州市','安丘市','高密市','昌邑市','昌乐县','临朐县'], //此字段年份为动态后台需要传入 
		yData:[2499,1900,870,1150, 730, 1310, 1590, 570, 1250]
		
}

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
 



/*各县市招商项目统计*/
 function secondArea(dom) {
    	  this.dom = dom;
  			this.myChart = echarts.init(document.getElementById(dom));
 			this.opts = {
						  /*  backgroundColor:'#fff',
						    title: {
						        text: '',
						        textStyle: {
						            fontSize: 12
						        },
			    				top:'3%',
			    				left:'2%',
						        align:'left'
						    },
						    tooltip: {
						        trigger: 'axis',
						        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
						            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						        },
						        textStyle:{
						            color:'#333',
						        },
						        backgroundColor:'rgba(255,255,255,0)',
						        formatter: function (params, ticket, callback) {
						            var str= '' 
						           //console.log(params);
						           if (!params) {
						               return "暂无数据"
						               
						           } 
						           
						           for(var i=0; i<params.length; i++)
						           {
		               if(params[i]!==null){
		                   var v=params[i].value?params[i].value:0;
		                   str+='<div style="color:#6b6b6b; background:rgba(255,255,255,0.6);font-size:12px; text-align:center; border:1px solid #5ab6f7; padding:4px 8px; border-radius:4px; ">数量：'+params[i].value+'</div>'
		               }
		           }
		            return str;
		           
		        }
		    },
		    calculable: true,
		    xAxis: [{
		        type: 'category',
		        data : [],
		         boundaryGap: false,
		        axisLine: {
		            lineStyle: {
		                color: "#d9d9d9",
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
		        },
		       splitLine: {
					show: true,
					lineStyle: {
						color: '#ccc',
						type : "solid"
					}
				},
		    }],
		    color:["#fe4f56"],
		    yAxis: [{
		        min:0,
		        // max:
		       
		        type: 'value',
		        // name: '民意数量',
		        axisLabel: 
		        {
		            formatter: '{value}',
		            textStyle:{
		                color:'#808080'
		            }
		        },
		        axisLine: {
		            lineStyle: {
		                color: "#ccc",
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
				}
		    }],
		    grid: {
		        x: '60',
		        x2: '30',
		       
		    },
		    label:{
		        normal:{
		            show:true,
		            position:'top',
		            textStyle:{
		                color:'#808080'
		            }
		        }
		    },
		    series: [{
		        name: '',
		        type: 'bar',
		        barWidth:'10',
		        data: []
		        
		    }]*/
		
 				backgroundColor:'#fff',
 				title: {
						        text: '',
						       textStyle: {
						            fontSize: 12,
						            color:'#666'
						        },
			    				top:'3%',
			    				left:'2%',
						        align:'left'
						    },
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        }
			    },
			    grid: {
			        x: '60',
			        x2: '30',
			        y2:30
			     
			    },
			    color:['#fe4f56'],
			    xAxis: {
			       type : 'value',
			       splitLine: {show:true},
			       axisLabel:{
			            show:true,  
			            textStyle:{
			                color:"#333",
			            },
			        },  axisTick:{
			             show:false
			         },   boundaryGap: [0, 0.01],
			        //splitLine:true,
			       axisLine:{
			           show:true,  
			            lineStyle:{
			                //type:'dashed',
			                width:1,
			                color:'#53add9',
			                
			            }
			        }
			        
			    },
			    yAxis: {
			        type: 'category',
			        data:[],
			       axisTick:{
			          show:true,  
			        } ,
			       splitLine: {show:true},
			        axisLabel:{
			            show:true,  
			            textStyle:{
			                color:"#333",
			            },
			        }, 
			        boundaryGap: [0, 0.01],
			        axisLine:{
			           show:true,  
			            lineStyle:{
			                width:1,
			                color:'#53add9',
			                
			            }
			        }
			    },
			    series: [
			        {
			            name: '',
			            type: 'bar',
			            barWidth:'15',
			           data:[]
			        }
			    ]
 			};

 	}
 secondArea.prototype.init = function(data){ 	
 	 this.opts.title.text=data.title;
	 this.opts.yAxis.data = data.xData;
	 this.opts.series[0].data = data.yData;
	 this.myChart.setOption(this.opts);
}