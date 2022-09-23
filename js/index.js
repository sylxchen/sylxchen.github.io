// 柱状图模块1
(function() {
    //实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //指定配置项和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0%',
          top: '10px',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
              alignWithLabel: true
            },
            //修改刻度标签相关样式
            axisLabel: {
                color: "rgba(255,255,255,0.6)",
                fontSize: "9"
            },
            axisTick: {
                show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,0.6)",
                fontSize: "12"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                    width: 1
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.1)"
                }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                //修改圆角
                barBorderRadius: 5
            }
          }
        ]
      };
      //配置项给实例对象
      myChart.setOption(option);
      //图标设置自适应
      window.addEventListener("resize", function() {
        myChart.resize();
      })
})();

//柱状图模块2
(function() {
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]
    option = {
      grid: {
        top: '10%',
        left: '22%',
        bottom: '10%'
      },
      xAxis: {
        show: false
      },
      yAxis: [
        {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          },
          type: 'category',
          data: ['HTML5', 'CSS3', 'javaScript', 'Vue', 'Node'],
          inverse: true
        },
        {
          show: true,
          data: [702, 350, 610, 793, 664],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 12,
            color: "#fff"
          },
          inverse: true
        }
      ],
      series: [
        {
          name: '条',
          type: 'bar',
          data: [70, 34, 60, 78, 69],
          yAxisIndex: 0,
          itemStyle: {
            barBorderRadius: 20,
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          },
          barCategoryGap: 50,
          barWidth: 10,
          label: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        },
        {
          name: '框',
          type: 'bar',
          data: [100, 100, 100, 100, 100],
          yAxisIndex: 1,
          barCategoryGap: 50,
          barWidth: 15,
          itemStyle: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
//折线图模块1
(function() {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: "#4c9bfd"
            },
            right: "10%"
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd",
                interval: 0
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },
            splitLine: {
                splitStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
            },
            {
                name: '新增游客',
                type: 'line',
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
//折线图模块2
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: "rgba(255,255,255,0.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '30',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,0.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,0.6)",
            fontSize: "12"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(1,132,213,0.4)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(1,132,213,0.1)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221,220,107,0.1)",
          borderWidth: 12
        },
        emphasis: {
          focus: 'series'
        },
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: '转发量',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: "#00d887",
          width: "2"
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(0,216,135,0.4)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(0,216,135,0.1)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221,220,107,0.1)",
          borderWidth: 12
        },
        emphasis: {
          focus: 'series'
        },
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
  })
})();
//饼形图模块1
(function() {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)" 
    },
    legend: {
      bottom: '5%',
      left: 'center',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,0.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ["50%", "40%"],
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: '20岁以下' },
          { value: 4, name: '20~29岁' },
          { value: 2, name: '30~39岁' },
          { value: 2, name: '40~49岁' },
          { value: 1, name: '50岁以上' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
  })
})();
//饼形图模块2
(function() {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var myColor = ["#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"];
  var option = {
    color: myColor,
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,0.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '38%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        label: {
          fontSize: 10
        },
        labelLine: {
          length: 6,
          length2: 8
        },
        data: [
          { value: 20, name: '云南', label:{color: myColor[0]} },
          { value: 26, name: '北京', label:{color: myColor[1]} },
          { value: 24, name: '山东', label:{color: myColor[2]} },
          { value: 25, name: '河北', label:{color: myColor[3]} },
          { value: 20, name: '江苏', label:{color: myColor[4]} },
          { value: 25, name: '浙江', label:{color: myColor[5]} },
          { value: 30, name: '四川', label:{color: myColor[6]} },
          { value: 42, name: '湖北', label:{color: myColor[7]} }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
  })
})();