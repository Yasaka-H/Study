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
                // ここの内部実装が多分間違ってる　なおせ
                if (this.min >= 59 && this.sec >= 59 && this.millsec >= 999) {
                    this.complete();
                } else if (this.sec >= 59 && this.millsec >=999) {
                    this.min++;
                    this.sec = 0;
                    this.millsec = 0;
                } else if (this.millsec >= 999) {
                    this.sec++;
                    this.millsec = 0;
                } else {
                    this.millsec++;
                }
            },

            start: function() {
                let self = this;
                this.timerObj = setInterval(function() {self.count()}, 1);
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
                let min = this.min.toString();
                let sec = this.sec.toString();
                let millsec = this.millsec.toString();

                if (min.length < 2) min = "0" + min;
                if (sec.length < 2) sec = "0" + sec;

                if (millsec.length < 2) millsec = "00" + millsec;
                else if (millsec.length < 3) millsec = "0" + millsec;

                return min + ":" + sec + ":" + millsec;
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
