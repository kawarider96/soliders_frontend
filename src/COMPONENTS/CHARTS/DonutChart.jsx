import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";

export function DonutChart({items}) {
let stats = [];
let labels = [];

const type = 'numbers';
switch (type) {
  case 'numbers':
    stats = [20, 30, 40, 50, 10];
    labels = ['ött', 'ömt', 'öksz', 'szerződéses', 'hivatásos'];
  break;
  default:
    stats = [10, 10, 10, 10, 20];
    labels = ['ött', 'ömt', 'öksz', 'szerződéses', 'hivatásos'];
  }
  

const pieChart = {
    series: [...stats],
    options: {
        chart: {
            toolbar: {
              show: true,
              offsetX: 0,
              offsetY: 0,
              tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true | '<img src="/static/icons/reset.png" width="20">',
                customIcons: []
              },
              export: {
                csv: {
                  filename: 'stat',
                  columnDelimiter: ';',
                  headerCategory: 'category',
                  headerValue: 'value',
                  dateFormatter(timestamp) {
                    return new Date(timestamp).toDateString()
                  }
                },
                svg: {
                  filename: undefined,
                },
                png: {
                  filename: undefined,
                }
              },
              autoSelected: 'zoom' 
            },
            dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 7,
                opacity: 0.9
              }
        },
        labels: [...labels],
        colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        stroke: {
            show: false,
        },
        legend: {
            position: 'bottom',
        },
    },
};

return (
  
    <ReactApexChart series={pieChart.series} options={pieChart.options} type="pie" height={300} />
  
)
}