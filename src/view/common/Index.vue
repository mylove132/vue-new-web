<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="chart-wrap">
        <div class="chart-dash">
          <!-- <div id="sparkline"></div> -->
          <div id="placeholder" style="width:100%;height:200px;"></div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="speed">
              <h2>Speed Avarage</h2>
              <h1>74
                <span>Km / hours</span>
              </h1>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="traffic">
              <h2>Traffic per day</h2>
              <h1>2.5874</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="traffic-rates">
              <h4>Traffic Rates</h4>
              <h1>76 %
                <span>-1,2 %</span>
              </h1>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="traffic-rates">
              <h4>Traffic Rates</h4>
              <h1>25 %
                <span>-1,8 %</span>
              </h1>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="traffic-rates">
              <h4>Traffic Rates</h4>
              <h1>83 %
                <span>-1,9 %</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="weather-wrap">
        <div class="row">
          <div class="col-lg-12">
            <div class="temperature"><b>Monday</b>, 07:30 AM
              <span>F</span>
              <span><b>C</b>
                                        </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="weather-icon">
              <i class="wi-day-lightning"></i>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="weather-text">
              <h2>Berlin
                <br><i>Day Lightning</i>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="weather-text">
              <h3><i class="wi-thermometer"></i>18<i class="wi-celcius"></i>
              </h3>
            </div>
          </div>
        </div>
        <div class="weather-dash">
          <div class="row">
            <div class="col-lg-2">
              <div class="daily-weather">
                <h2>Mon</h2>
                <h3>85
                  <span><i class="wi-fahrenheit"></i>
                                                </span>
                </h3>
                <h4>
                                                <span><i class="wi-day-lightning"></i>
                                                </span>
                </h4>
                <h5>15
                  <i>km/h</i>
                </h5>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="daily-weather">
                <h2>Tue</h2>
                <h3>81
                  <span><i class="wi-fahrenheit"></i>
                                                </span>
                </h3>
                <h4><i class="wi-day-cloudy"></i>
                </h4>
                <h5>12
                  <i>km/h</i>
                </h5>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="daily-weather">
                <h2>Wed</h2>
                <h3>83
                  <span><i class="wi-fahrenheit"></i>
                                                </span>
                </h3>
                <h4><i class="wi-rain-mix"></i>
                </h4>
                <h5>14
                  <i>km/h</i>
                </h5>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="daily-weather">
                <h2>Thu</h2>
                <h3>80
                  <span><i class="wi-fahrenheit"></i>
                                                </span>
                </h3>
                <h4><i class="wi-day-sunny"></i>
                </h4>
                <h5>15
                  <i>km/h</i>
                </h5>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="daily-weather">
                <h2>Fri</h2>
                <h3>79
                  <span><i class="wi-fahrenheit"></i>
                                                </span>
                </h3>
                <h4><i class="wi-day-storm-showers"></i>
                </h4>
                <h5>11
                  <i>km/h</i>
                </h5>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="daily-weather">
                <h2>Sat</h2>
                <h3>82
                  <span><i class="wi-fahrenheit"></i>
                                                </span>
                </h3>
                <h4><i class="wi-cloudy"></i>
                </h4>
                <h5>10
                  <i>km/h</i>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
