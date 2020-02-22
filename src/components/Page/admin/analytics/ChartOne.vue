<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'ChartOne',
  extends: Line,
  props: {
    graphData: {
      type: Array,
      required: true
    },
    bg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      result: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        dataSets: [
          {
            label: '',
            data: this.graphData,
            borderColor: this.bg,
            backgroundColor: '#fff',
            fillColor: '#3d9e40',
            strokeColor: '#fefefe',
            pointColor: 'transparent',
            pointStrokeColor: 'transparent',
            pointHighlightFill: '#fefefe',
            pointHighlightStroke: 'rgba(255,255,255,0.3)',
            borderWidth: '2.5'
          }
        ]
      }
    };
  },
  mounted() {
    this.$refs.canvas.setAttribute('width', '100%');
    this.$refs.canvas.setAttribute('height', '125px');
    console.log(this.$refs.canvas);
    this.renderChart(
      {
        labels: this.result.labels,
        datasets: this.result.dataSets
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        animationSteps: 30,
        scaleFontColor: '#fefefe',
        datasetStrokeWidth: 6,
        pointDotRadius: 6,
        pointDotStrokeWidth: 6,
        scaleShowVerticalLines: false,
        scaleLineColor: '#9ec3b8',
        scaleGridLineColor: '#54b858',
        scaleGridLineWidth: 1,
        lineTension: 0.25,
        elements: {
          point: {
            radius: 0
          }
        },

        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              display: false
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              display: false
            }
          ]
        }
      }
    );
  }
};
</script>
