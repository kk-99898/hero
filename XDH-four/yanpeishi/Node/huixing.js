'use strict';
var a=8;//长
var b=8;//宽
var c= 4;//内长
var d =4;//内宽
var f ='*';
test (a,b,c,d,f);
function test(a,b,c,d,f){
    for(var i=1;i<b+1;i++){
        if(i==1||i==b){//  1  ,  8
          
            for(var j=1;j<a+1;j++){
                process.stdout.write(' '+f);
            }
        }
        else{
            process.stdout.write(' '+f);
            if(i==(b-d)/2+1||i==(b-d)/2+d){ //nei   s   x
                for(var q=1;q<(a-c-2)/2+1;q++){
                    process.stdout.write('  ');
                } 
                for(var w=1;w<c+1;w++){
                process.stdout.write(' '+f);
                }
                for(var e=1;e<(a-c-2)/2+1;e++){
                    process.stdout.write('  ');
                }
                process.stdout.write(' '+f);
            }
            if(i>(b-d)/2+1&&i<(b-d)/2+d){//nei   z
                for(var q=1;q<(a-c-2)/2+1;q++){
                    process.stdout.write('  ');
                }
                 process.stdout.write(' '+f);
                 for(var w =1;w<c-1;w++){
                     process.stdout.write('  ');
                 }
                 process.stdout.write(' '+f);
                 for(var e=1;e<(a-c-2)/2+1;e++){
                    process.stdout.write('  ');
                }
                process.stdout.write(' '+f);
            }
            if(i>1&&i<(b-d)/2+1){//s
                for(var r=1;r<a-1;r++){
                    process.stdout.write('  ');
                }
                process.stdout.write(' '+f);
            }
            if(i>(b-d)/2+d&&i<b){//x
                for(var r=1;r<a-1;r++){
                    process.stdout.write('  ');
                }
                process.stdout.write(' '+f);
            }
           
        }
        console.log();
    }

}