const mysql = require('mysql'); // we require the library - A 
const inquirer = require('inquirer');

// - B 
let batman = mysql.createConnection({
    host:"Localhost",
    port:3306,
    user:"root",
    password:"1Lovefilm",
    database:"bamazon"
})


batman.connect(function(err){
    if (err) throw err; // if connection fails then throw error
    console.log("connection successful!");
    // Step 1: Querying a table of every single items
    let qry_str = `SELECT * FROM bamazon.products;`
    batman.query(qry_str, (err, res) => {
        if (err) throw err;

        for(let item of res) {
            console.log( item.Item_id + ' || ' + item.product_name + ' || ' + item.department_name + ' || ' + item.price + ' || ' + item.stock_quantity )
        }
        // Step 2: Ask User What do you want to buy
        inquirer.prompt([{
            type:'input',
            name:'choice',
            message:"What would you like to purchase?"
        }]).then((answer) => {
            let product_that_user_wants = answer.choice;
            console.log('Hey User You Chose -->', product_that_user_wants);
            
            inquirer.prompt([{
                type:'input',
                name:'quant',
                message:"How many do you want to buy"
            }]).then((answer2) => {
                let quantity_that_user_wants = answer2.quant;
                console.log( 'This is how many you want', quantity_that_user_wants );

                // first we see how much in the stock left
                let stock_left_query = `SELECT stock_quantity from products
                WHERE product_name='${product_that_user_wants}';`
                batman.query(stock_left_query, (err, d) => {
                    console.log(d[0].stock_quantity);
                    let new_stock = d[0].stock_quantity - quantity_that_user_wants;
                    let update_query = `UPDATE products
                    SET stock_quantity = ${new_stock}
                    WHERE product_name = '${product_that_user_wants}';`

                    batman.query(update_query, (err, final) => {
                        console.log('Updated');
                    })
                } )

                // let update_query = `UPDATE products
                // SET stock_quantity = 59
                // WHERE product_name = 'Call of Duty';`

            })

        })
    })

});