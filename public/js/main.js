const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function getCalories(){
    const foodSearch = document.querySelector('#inputFood').value
    //get request to search nutritionix for the item's name in the API
    try{
        const res = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${foodSearch}`,{
           
            headers: {
                'x-app-id' : '97f66bd0',
                'x-app-key' : '404548aade2822f45583e849df78c7d7'
            },
        })
        const data = await res.json()
        //console.log(data)
        
        document.querySelector('#outputFood').innerText = data.common[0].food_name
        //post request to get Calories,etc
        const res2 = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`,{
            method:'post',
                    
            headers:{
                'Content-Type': 'application/json',
                'x-app-id' : '97f66bd0',
                'x-app-key' : '404548aade2822f45583e849df78c7d7',
                //'x-remote-user-id' : 0, //not needed
            },
            body: JSON.stringify( {
                'query': data.common[0].food_name //pull first food name from object
            })
        })
        const data2 = await res2.json()
        //console.log(data2)
        document.querySelector('#outputCalorie').innerText = data2.foods[0].nf_calories
        //access the photo
        //document.querySelector('#').innerText = data2.foods[0].photo

    }catch(err){
        console.log(err)
    }

}