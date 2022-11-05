// let type = ""

// export const changeTemplate = () => {

//     if(window.innerWidth < 1_000)
//     {    
//         if(type === "PHONE" || type === "")
//         {
//             const template = document.getElementById('category_board')
//             const grid1 = JSON.parse(document.querySelector('#custom-grid').innerHTML)
            
//             let counter = 1;
//             const generated_grid = []
//             let row = []
            
//             grid1.forEach((item) => {
//                 if(row.length !== 2){
//                     row.push(item)
//                 }
//                 else{
//                     generated_grid.push(row)
//                     row = [];
//                     row.push(item)
//                 }
//             })
            
//             if(row.length !== 0){
//                 generated_grid.push(row)
//                 row = []
//             }
            
//             let generated_grid_sorted = []
//             counter = 1
    
//             while(grid1.find(e => e.tile === `t${counter}`)){
//             generated_grid.forEach((item_row) => {
            
//                 if(item_row[0].tile === `t${counter}`)
//                     if(item_row[1].tile === `t${counter}`){
//                         generated_grid_sorted.push(item_row)
//                     }
//                     else{
//                         generated_grid_sorted.push(item_row)
//                     }
//                 })
//                 counter++;
//             }        
            
//             let generated_grid_string = ""
//             generated_grid_sorted.forEach((row) => {
//                 let row_str = '\"'
//                 row.forEach((item) => {
//                     row_str += `${item.tile} `
//                 })
//                 row_str = row_str.trim()
//                 generated_grid_string += row_str + "\" "
//             })
        
//             template.style.gridTemplateAreas = generated_grid_string;
//             template.style.gridTemplateColumns = 'repeat(2, 1fr)'
//             template.style.gridTemplateRows = 'repeat(200px, 1fr)'
//             type = "COMPUTER"
//         }
//     }
//     if(window.innerWidth > 1_000)
//     {
//         if(type === "COMPUTER" || type === "")
//         {
//             const template = document.getElementById('category_board')
//             const g = JSON.parse(document.querySelector('#custom-grid').innerHTML)
            
//             const rows = []
//             let row = []
    
//             g.forEach(element => {
    
//                 row.push(element.tile)
    
//                 if(row.length === 4){
//                     rows.push(row)
//                     row = []
//                 }
//             });
    
//             let str = " '" +  rows.join("' '") + "' "
//             str = str.replaceAll(',', ' ')
//             template.style.gridTemplateAreas = str
//             template.style.gridTemplateColumns = 'repeat(4, 1fr)'
//             template.style.gridTemplateRows = 'repeat(100px, 1fr)'
//             type = "PHONE"
//         }
        
//     }    
// }


// window.onresize = () => {changeTemplate()}

