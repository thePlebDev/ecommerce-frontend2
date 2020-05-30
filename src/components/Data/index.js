const data = [
  {
    id:1,
    name:'Product 1',
    description:'this is the first item on the item list, is it the best? No but it tries its best ',
    img:'https://images.unsplash.com/photo-1575833947349-69324d765146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  },
  {
    id:2,
    name:'Product 2',
    description:'this is the second item on the item list, is it the best? No but it tries its best ',
    img:'https://images.unsplash.com/photo-1575833947349-69324d765146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  },
  {
    id:3,
    name:'Product 3',
    description:'this is the third item on the item list, is it the best? No but it tries its best ',
    img:'https://images.unsplash.com/photo-1575833947349-69324d765146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  }
]



//revealing module pattern.
const cartCount = (()=>{

  let count= 1
  let items = []
  function increment(){
    count ++
    console.log('is working')
    console.log(count)
    return count
  }
  function decrement(){
    if(count <= 0){
      return count
    }else {
      console.log(count)
      count --
      return count
    }
  }
  //public items
  return{
    increment,
    decrement,
    count
  }
})()

export { data, cartCount}
