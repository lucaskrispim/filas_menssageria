// callback

// function fetchData(callback){
//     setTimeout(()=>{
//         const erroSimulado = true
//         if(erroSimulado){
//             callback("Erro ao carregar os dados!",null)
//         }else{
//             callback(null,"Dados carregados!")
//         }
//     },2000)
// }

// fetchData((err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
// })

// promisses


// function fetchData(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const erroSimulado = true
//             if(erroSimulado){
//                 reject("Erro ao carregar os dados!")
//             }else{
//                 resolve("Dados carregados!")
//             }
//         },2000)
//     })

// }

// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.error(error)) 


// async await

async function fetchData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const erroSimulado = true
            if(erroSimulado){
                reject("Erro ao carregar os dados!")
            }else{
                resolve("Dados carregados!")
            }
        },2000)
    })

}

async function showData(){
    try {
        const data = await fetchData();
        console.log(data)
    } catch (error) {
        console.error(error)        
    }
}

showData()