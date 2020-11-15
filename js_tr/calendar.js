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
             
             var agg = "";

             if(todaysMonth >monthh){
                agg = todaysYear - yearr;
            }else if(todaysMonth == monthh){//===だと正常に動かない//
                if(todaysDay>=dayy){
                    agg = todaysYear-yearr;
                }else{
                    agg =todaysYear-yearr-1;
                };
            }else if(todaysMonth <monthh){
                agg = todaysYear-yearr-1;
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
        year:"",
        result:"",
        arry:[],
        newarry:[]
    },

    methods:{

        judge : function (year){
            let result = false;
            if(year%100===0){
                if(year%400===0){
                    result = true;
                }else{
                    result = false;
                };
            }else if(year%4===0){
                result = true;
            }else{
                result = false;
            };

            return result;
        },

        judge2 : function(){
            let result =  this.judge(this.year);
            console.log(result);
        },


        //--閏年の計測--//
        count : function (){
            // for(this.year=1100;this.year<=2700;this.year++){
            //     this.judge();
            //     this.arry.push(this.result);
            // };
            // this.newarry = this.arry.filter(e => e==true);
            // console.log(this.newarry.length);

            let count = 0;
            for(let i=1100;i<=2700;i++){
                if(this.judge(i)){
                    count++;
                };
            };
            // this.year = count
            console.log(count);
            count=0;
        },
        //--閏年の計測--//


    },
});
//------------------閏年か判定-----------------//



// var vu = new Vue ({

//     el : "#app3",

//     data:{
//         year:"",
//         month:"",
//         day:"",
//         boolean:"",
//     },

//     methods : {
//         calendar : function(year,month,day,boolean){


//             if(year%100===0){
//                 if(year%400===0){
//                     boolean = true;
//                 }else{
//                     boolean = false;
//                 };
//             }else if(year%4===0){
//                 boolean = true;
//             }else{
//                 boolean = false;
//             };

//             return boolean;
//         },


//         calendar1 : function(){
//             var calender1 = new calendar (2000,5,5);
//             console.log(calender1);
//         }
//     }
// });



//---------------Calendarオブジェクトの作成-----------------//
function calendar (year,month,day,boolean){

    this.year = year;
    this.month = month;
    this.day = day;

    if(year%100===0){
        if(year%400===0){
            boolean = true;
        }else{
            boolean = false;
        };
    }else if(year%4===0){
        boolean = true;
    }else{
        boolean = false;
    };

    this.boolean = boolean;
};
//---------------Calendarオブジェクトの作成-----------------//




//---------------newインスタンスの作成-----------------//
var calendar1 = new calendar(2000,10,10);

console.log(calendar1);
//---------------newインスタンスの作成-----------------//


