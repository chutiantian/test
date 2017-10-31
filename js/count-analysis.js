var pieData={
		xData:['市内资金','省内资金','省外资金','北京资金'],
		yData:[
            {value:335, name:'市内资金'},
            {value:310, name:'省内资金'},
            {value:234, name:'省外资金'},
            {value:135, name:'北京资金'}
		   		]
	}
	function drawPie(data){
		var	opt = {
			color:["#4c3bf1","#ec910c","#19d3ef","#fe4f56"],
		    title : {
		        text: '引资情况统计',
		        subtext: '省内资金不包含市内资金',
		        x:'left',
		        left:'2%'
		    },
		    tooltip : {
		        trigger: 'item',
		        confine:true,
		        formatter: "{b} : {c} ({d}%)"
		    },
		    calculable : false,
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: data.xData,
		        icon:'circle',
		        bottom:'30%',
		        left:'2%'
		    },
		    series : [
		        {
		            
		            type: 'pie',
		            radius : '55%',
		            center: ['60%', '60%'],
		            data:data.yData,
		             labelLine:{
                normal:{
                    show: false
                }
		            },
		            label: {
		                normal: {
		                    show: false
		                }
		            },
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
		return opt;
	}
	

var mapData={
	xData:['大型跨国公司','世界500强','行业领军企业'],
	yData:[{
			data:[
				   		{ name: '烟台市', value: 422 },
                        { name: '威海市', value: 333 },
                        { name: '淄博市', value: 1444 },
                        { name: '滨州市', value: 1222 },
                      	{ name: '东营市', value: 2322 }
				],
			},{
				data:[
				    {name: '连云港', value: 9},
				    {name: '河源', value: 12},
				    {name: '葫芦岛', value: 12},
				    {name: '连云港', value: 12},
				    {name: '嘉兴', value: 14}
				]
			},{
				data:[
				    { name: '聊城市', value: 1111 },
                    { name: '德州市', value: 422 },
                    { name: '菏泽市', value: 1111},
                    { name: '济南市', value: 1243 },
                    { name: '莱芜市', value: 2111 },
                  
                    { name: '济宁市', value: 888 },
				]
			}
			 
		]
}
/*地图*/
function getMap(dataObj){

	this.serData=function(){
		var objarr=[] 
		for(var i=0;i<dataObj.yData.length;i++){
	       	var s={
					name:dataObj.xData[i],
					type: 'map',
					map: 'shandong',	
					roam: true,
					itemStyle:{
						normal:{label:{show:true}},
						emphasis:{label:{show:true}}
					},
					data:dataObj.yData[i].data
				}
	        objarr.push(s)

		}
		return objarr;
	};
	this.opt = {
		   backgroundColor:'#eeeeee',
				tooltip : {
					trigger: 'item'
				},
				legend: {
					orient: 'vertical',
					x:'left',
					data:dataObj.xData,
					textStyle:{
						fontStyle:'12'
					}
					
				},
				visualMap: {
					min: 0,
					max: 2500,
					x: 'left',
					y: 'bottom',
					text:['高','低'],
					inRange: {
						color: ['#e0ffff', '#006edd']
					},
					itemWidth:'15%',
					itemHeight:'70%',
					calculable : true
				},
	    series : this.serData()
	};
	  return this.opt 
}


var chartPie,chartMap;
		$(function(){
		
	 
			$('.year-chart').on('click',function(){
				chartPie=echarts.init(document.getElementById('drawpie'));			
				chartPie.setOption(drawPie(pieData));
				$.get('../Lib/map/shandong.json', function (chinaJson) {
		  			  echarts.registerMap('shandong', chinaJson);		   
		   			  chartMap = echarts.init(document.getElementById('drawmap'));
		   		 	  chartMap.setOption(getMap(mapData));
		});
			})
			$(window).on('resize',function(){
				chartPie.resize();
				chartMap.resize();
			})
			
	
		
})	