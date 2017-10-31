$(function(){
    var drawPie1=new drawEchartPie('echartPie');
	drawPie1.init(drawEchartPieData1);
	var drawPie2=new drawEchartPie('echartPie2');
	drawPie2.init(drawEchartPieData2);
})
var drawEchartPieData1={
    title:'智慧农业云平台项目\n2017年8月10日处于【审批结束】阶段',  
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['15%', '45%'],
			center: ['50%', '50%'],
            data:[{
				value: 25,
                name: '项目结束'   
			}, {
				value: 16,
				name: '进度提报'
			}, {
				value: 11,
				name: '项目启动'
			}, 
			{
				value: 11,
				name: '签订合同'
			}, {
				value: 11,
                name: '审批结束'
			}, {
				value: 8,
				name: '审批申请'
			},
			{
				value: 13,
				name: '项目签约'
			},
			{
				value: 7,
				name: '项目洽谈'
			},
			{
				value: 8,
				name: '项目评估'
			},
			{
				value: 11,
				name: '推介活动启动'		
			},
			{
				value: 20,
				name: '招商项目推介',
				selected:true
			}
		],
            itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
            label: {
				normal: {
					position: 'outside',
					show: true,
					formatter: "{b}",
					textStyle: {
						fontSize: 14
					}
				}
			},
            labelLine: {
				normal: {
				   length:8,
				   	length2:8
				}
			}
        }
    ]
};
var drawEchartPieData2={
    title:'滨海区新能源汽车产业基地项目\n2017年8月6日【审批结束】阶段',  
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['15%', '45%'],
			center: ['50%', '50%'],
            data:[{
				value: 25,
                name: '项目结束'   
			}, {
				value: 16,
				name: '进度提报'
			}, {
				value: 11,
				name: '项目启动'
			}, 
			{
				value: 11,
				name: '签订合同'
			}, {
				value: 11,
                name: '审批结束'
			}, {
				value: 8,
				name: '审批申请'
			},
			{
				value: 13,
				name: '项目签约'
			},
			{
				value: 7,
				name: '项目洽谈'
			},
			{
				value: 8,
				name: '项目评估'
			},
			{
				value: 11,
				name: '推介活动启动'		
			},
			{
				value: 20,
				name: '招商项目推介',
				selected:true
			}
		],
            itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
            label: {
				normal: {
					position: 'outside',
					show: true,
					formatter: "{b}",
					textStyle: {
						fontSize: 14
					}
				}
			},
            labelLine: {
				normal: {
				   length:8,
				   	length2:8
				}
			}
        }
    ]
};
/*环形饼状图表*/
function drawEchartPie(dom) {
    this.dom = dom;
    this.myChart = echarts.init(document.getElementById(dom));      
    this.option = {
    backgroundColor:'#fff',
    tooltip : {
        show: true,
        formatter: "{b}: {c} ({d}%)",
        backgroundColor:'none',
         textStyle:{
             fontSize:14,
             color:'#333'
         }
    },
    title: {
			 x: 'center',
			 y:"40",
			text:'',
			textStyle: {
				fontSize: 14,
				fontWeight: "bolder",
				color: "#666"
            }
		},
	color:['#00c0fe', '#fce693', '#ffc702', '#ff9400', '#ff5601','#009eff','#0081d2'],
    series:[]
   };
}
drawEchartPie.prototype.init = function(data){
	this.option.title.text=data.title;
	this.option.series = data.series;
	this.myChart.setOption(this.option);
}
