const div = document.querySelector('.root');
const array = []

for(let increment = 0;increment<=1000000;increment++){
   
  
}
div.innerHTML = array.join(" ") //less dom operation Batch update
//less dom operation Batch updates

//1.less dom operation Batch update for this why react specific change
//change state with reconciliation algorithm

//2.particular change 
//virtual dom + real dom = probably would be slow but,so fast than reprinting .
//