var app = new Vue({
    el:"#app",
    data:{
        year:"",
        month:"",
        day:""
    },

    methods:{
        getAgg : function () {
            var today = new Date();

             var todaysYear = today.getFullYear();
             var todaysMonth = today.getMonth()+1;
             var todaysDay = today.getDate();

             var yearr = this.year;
             var monthh = this.month;
             var dayy = this.day;

             if(todaysMonth >monthh){
                var agg = todaysYear - yearr;
            }else if(todaysMonth =monthh){
                if(todaysDay>=dayy){
                    var agg = todaysYear-yearr;
                }else{
                    var agg =todaysYear-yearr-1;
                };
            }else if(todaysMonth <monthh){
                var agg = todaysYear-yearr-1;
            };
            console.log(agg);
        },

        //  getAgg: function(){
        //     if(this.todaysMonth >this.monthh){
        //         var agg = this.todaysYear - this.yearr;
        //     }else if(this.todaysMonth =this.monthh){
        //         if(this.todaysDay>this.dayy){
        //             var agg = this.todaysYear-this.yearr;
        //         }else{
        //             var agg = this.todaysYear-this.yearr-1;
        //         };
        //     }else if(this.todaysMonth <this.monthh){
        //         var agg = this.todaysYear-this.yearr-1;
        //     };
        //     var agg=this.todaysYear - this.yearr;
        //     console.log(agg);
        // },
    }
});



