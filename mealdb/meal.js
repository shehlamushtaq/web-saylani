
//===========(      Random Meal     )=======================
function randomMeal(){
    var api2 = `https://www.themealdb.com/api/json/v1/1/random.php`
    console.log(api2)
    var row  =  document.getElementById('row');
    fetch (api2)
    .then  (res => res.json())
    .then (data => {
        console.log(data)
        var recipesArr = data.meals;
    row.innerHTML = "";
for (let i=0; i<recipesArr.length; i++){
    var div = document.createElement('div')
    var img = document.createElement('img')
    
    img.setAttribute('src',recipesArr[i].strMealThumb)
                 img.className = 'singleImg'
                 div.className = 'singleBox'
    var content = document.createElement('div')
    var textContent = document.createTextNode(recipesArr[i].strInstructions)
    content.appendChild(textContent)
    var text = document.createTextNode(recipesArr[i].strMeal)
    div.appendChild(text)
    div.appendChild(img)
    row.appendChild(div)
    row.appendChild(content)
}
})
    }
//================  Search Meal   =====================================
function searchMeal() {
    
    var search = document.getElementById('search')
    console.log(search)
    var api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    console.log(api)

    fetch (api) 
        .then (res => res.json())
        .then (function (data){
            console.log(data.meals)
            const recipeArray = data.meals;
            var row = document.getElementById('row')
            row.innerHTML = "";

            for (let i = 0; i<recipeArray.length; i++){
                var div = document.createElement('div')
                var img = document.createElement('img')
                
                var text = document.createTextNode(recipeArray[i].strMeal)
                 img.setAttribute('src',recipeArray[i].strMealThumb)
                 img.className = 'myimg'
                 div.className = 'box'
                 div.appendChild(text)
                div.appendChild(img)
                row.appendChild(div)
            }


        })
        search.value = "";
}

