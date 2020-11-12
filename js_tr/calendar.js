//------------------年齢の算出-----------------//

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
            }else if(todaysMonth ===monthh){
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
    }
});

//------------------年齢の算出-----------------//

//------------------閏年か判定-----------------//
var app2 = new Vue({

    el:"#app2",

    data:{
        year:""
    },

    methods:{

        discrimination : function (){
            if(this.year%100===0){
                if(this.year%400===0){
                    console.log(true);
                }else{
                    console.log(false);
                };
            }else if(this.year%4===0){
                console.log(true);
            }else{
                console.log(false);
            };
        }
    },

});
//------------------閏年か判定-----------------//




