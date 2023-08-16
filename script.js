let a = document.getElementById('a')
let b = document.getElementById('b')

let chaingA = ()=>{
     a.style.color='violet'
     a.style.transform='rotate(360deg)'
     a.style.transition='4s'
     a.style.backgroundColor="blue"
     document.body.style.backgroundColor='yellow'
     document.body.style.transition='4s'
    
}

let chaingB = ()=>{
    b.style.color='green'
    b.style.transform='rotate(360deg)'
    b.style.transition='4s'
    b.style.backgroundColor="yellow"
    document.body.style.backgroundColor='green'
    document.body.style.transition='4s'
}


setTimeout(()=>{
    chaingA()
},1000);

setTimeout(()=>{
    chaingB()
},5000);

chaingA()
chaingB()


    let clock =()=> {
        
        let date = new Date()
        let monht_num = date.getMonth()
        let day = date.getDay()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let second = date.getSeconds()
    
        // let date_time = 'Бугун :'+ day + monht_num+'-'+'саат'+hours+':'+minutes+':'+second
        if(hours<9)hours="0"+hours
        if(minutes<9)minutes="0"+minutes
        if(second<10)second="0"+second
    let month = ["янв", "фе", "март", "апр", "май", "июнь", "июль", "ав", "сень", "окт", "ноя", "дек"]
    console.log()
    let date_time = hours+":"+minutes+":"+second
    let element = document.getElementById('time').innerHTML = date_time

   
    
    
    
 setTimeout(()=>{
        clock()
    },1000);

}
clock()

let c = document.getElementById('time')

let chaingC = ()=>{
    c.style.color=''
    c.style.transition='4s'
    c.style.transform='rotate(360deg)'
   
    c.style.backgroundColor="yellow"
    document.body.style.backgroundColor='green'
    document.body.style.transition='4s'
}
setInterval(()=>{
    chaingC()
},6000);

chaingC()