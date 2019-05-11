<template>
    <div id="timer">
        <div class="timer">
            <div class="time">
                {{ formatTime }}
            </div>
            <el-button round v-on:click="start" v-if="!timerOn">START</el-button>
            <el-button round v-on:click="stop" v-if="timerOn">STOP</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Timer',
        data() {
            return {
                min: 0,
                sec: 0,
                millsec: 0,
                timerOn: false,
                timerObj: null,
            }
        },
        methods: {
            count: function() {
                // if (this.min >= 59 && this.sec >= 59 && this.millsec >= 999) {
                //     this.complete();
                // } else if (this.sec >= 59 && this.millsec >=999) {
                //     this.min++;
                //     this.sec = 0;
                //     this.millsec = 0;
                // } else if (this.millsec >= 999) {
                //     this.sec++;
                //     this.millsec = 0;
                // } else {
                //     this.millsec++;
                // }

                if (this.millsec >= 99 & this.sec >= 59 && this.min >= 59){
                  this.complete();
                } else if (this.millsec >= 99 && this.sec >= 59) {
                    this.millsec = 0;
                    this.sec = 0;
                    this.min ++;
                } else if (this.millsec >= 99) {
                    this.millsec = 0;
                    this.sec ++;
                } else {
                    this.millsec ++;
                }

            },

            start: function() {
                let self = this;
                this.timerObj = setInterval(function() {self.count()}, 10);
                this.timerOn = true;
            },

            stop: function() {
                clearInterval(this.timerObj);
                this.timerOn = false;
                this.min = 0;
                this.sec = 0;
                this.millsec = 0;
            },

            complete: function() {
                clearInterval(this.timerObj);
            }
        },
        computed: {
            formatTime: function() {
                let timeStrings = [
                    this.min.toString(),
                    this.sec.toString(),
                    this.millsec.toString()
                ].map(function(str) {
                    if (str.length < 2) return "0" + str;
                    else return str;
                })

                return timeStrings[0] + ":" + timeStrings[1] + ":" + timeStrings[2];
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #timer {
       display: flex;
       align-items: center;
       justify-content: center;
   }
    .time {
        font-size: 100px;
    }
</style>
