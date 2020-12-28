function createElement(name){
   return document.createElement(name)  
}
 
var container=createElement("div")
container.setAttribute("class","container")

var heading=createElement("h1")
heading.innerHTML="Registration Form"
container.append(heading)

var form=createElement("form")
container.append(form)

var form_row=createElement("div")
form_row.setAttribute("class","form-row")
form.append(form_row)

var body=createElement("div")
body.setAttribute("class","form-group col-md-6")
var lable=createElement("label")
lable.setAttribute("for","FirstName")
lable.innerHTML="First Name"
var input=createElement("input")
input.setAttribute("type","text")
input.setAttribute("class","form-control required")
input.setAttribute("id","fname")
input.setAttribute("placeholder","FirstName")
body.append(lable,input)
form_row.append(body)

var body=createElement("div")
body.setAttribute("class","form-group col-md-6")
var lable=createElement("label")
lable.setAttribute("for","LastName")
lable.innerHTML="Last Name"

var input=createElement("input")
input.setAttribute("type","text")
input.setAttribute("class","form-control required")
input.setAttribute("id","lname")
input.setAttribute("placeholder","LastName")
body.append(lable,input)
form_row.append(body)

var gender=createElement("div")
gender.setAttribute("class","form-group col-md-4")
var lable=createElement("lable")
lable.setAttribute("for","Gender")
lable.innerHTML="Gender"
var select=createElement("select")
select.setAttribute("id","Gender")
select.setAttribute("class","form-control required")
var option1=createElement("option")
var option2=createElement("option")
var option3=createElement("option")
option1.innerHTML="Male"
option2.innerHTML="Female"
option3.innerHTML="Transgender"
select.append(option1,option2,option3)
gender.append(lable,select)
form_row.append(gender)

var body2=createElement("div")
body2.setAttribute("class","form-group")
var lable=createElement("label")
lable.setAttribute("for","Address")
lable.innerHTML="Address"
var textarea=createElement("textarea")
textarea.setAttribute("class","form-control required")
textarea.setAttribute("id","Address")
textarea.setAttribute("rows","3")
body2.append(lable,textarea);
form.append(body2)

var form_row=createElement("div")
form_row.setAttribute("class","form-row")
form.append(form_row)

var body=createElement("div")
body.setAttribute("class","form-group col-md-4")
var lable=createElement("label")
lable.setAttribute("for","State")
lable.innerHTML="State"
var input=createElement("input")
input.setAttribute("type","text")
input.setAttribute("class","form-control required")
input.setAttribute("id","State")
input.setAttribute("placeholder","State")
body.append(lable,input)
form_row.append(body)

var body=createElement("div")
body.setAttribute("class","form-group col-md-3")
var lable=createElement("label")
lable.setAttribute("for","Pincode")
lable.innerHTML="Pincode"
var input=createElement("input")
input.setAttribute("type","number")
input.setAttribute("class","form-control required")
input.setAttribute("id","Pincode")
input.setAttribute("placeholder","Pincode")
body.append(lable,input)
form_row.append(body)

var body=createElement("div")
body.setAttribute("class","form-group col-md-5")
var lable=createElement("label")
lable.setAttribute("for","Country")
lable.innerHTML="Country"
var input=createElement("input")
input.setAttribute("type","text")
input.setAttribute("class","form-control required")
input.setAttribute("id","Country")
input.setAttribute("placeholder","Country")
body.append(lable,input)
form_row.append(body)

var food=createElement("div")
food.setAttribute("class","form-row")

var Food1=createElement("div")
Food1.setAttribute("class","form-group col-md-2")
var lable=createElement("lable")
lable.setAttribute("for","FoodChoice1")
lable.innerHTML="FoodChoice1"
var select=createElement("select")
select.setAttribute("id","FoodChoice1")
select.setAttribute("class","form-control required")
var option1=createElement("option")
var option2=createElement("option")
var option3=createElement("option")
var option4=createElement("option")
var option5=createElement("option")
option1.innerHTML="Veg"
option2.innerHTML="Non-Veg"
option3.innerHTML="Veg with egg"
option4.innerHTML="Drinks"
option5.innerHTML="Salad"
select.append(option1,option2,option3,option4,option5)
Food1.append(lable,select)

var Food2=createElement("div")
Food2.setAttribute("class","form-group col-md-2")
var lable=createElement("lable")
lable.setAttribute("for","FoodChoice2")
lable.innerHTML="FoodChoice2"
var select=createElement("select")
select.setAttribute("id","FoodChoice2")
select.setAttribute("class","form-control required")
var option1=createElement("option")
var option2=createElement("option")
var option3=createElement("option")
var option4=createElement("option")
var option5=createElement("option")
option1.innerHTML="Veg"
option2.innerHTML="Non-Veg"
option3.innerHTML="Veg with egg"
option4.innerHTML="Drinks"
option5.innerHTML="Salad"
select.append(option1,option2,option3,option4,option5)
Food2.append(lable,select)

var Food3=createElement("div")
Food3.setAttribute("class","form-group col-md-2")
var lable=createElement("lable")
lable.setAttribute("for","FoodChoice3")
lable.innerHTML="FoodChoice3"
var select=createElement("select")
select.setAttribute("id","FoodChoice3")
select.setAttribute("class","form-control required")
var option1=createElement("option")
var option2=createElement("option")
var option3=createElement("option")
var option4=createElement("option")
var option5=createElement("option")
option1.innerHTML="Veg"
option2.innerHTML="Non-Veg"
option3.innerHTML="Veg with egg"
option4.innerHTML="Drinks"
option5.innerHTML="Salad"
select.append(option1,option2,option3,option4,option5)
Food3.append(lable,select)

var Food4=createElement("div")
Food4.setAttribute("class","form-group col-md-2")
var lable=createElement("lable")
lable.setAttribute("for","FoodChoice4")
lable.innerHTML="FoodChoice4"
var select=createElement("select")
select.setAttribute("id","FoodChoice4")
select.setAttribute("class","form-control required")
var option1=createElement("option")
var option2=createElement("option")
var option3=createElement("option")
var option4=createElement("option")
var option5=createElement("option")
option1.innerHTML="Veg"
option2.innerHTML="Non-Veg"
option3.innerHTML="Veg with egg"
option4.innerHTML="Drinks"
option5.innerHTML="Salad"
select.append(option1,option2,option3,option4,option5)
Food4.append(lable,select)

var Food5=createElement("div")
Food5.setAttribute("class","form-group col-md-2")
var lable=createElement("lable")
lable.setAttribute("for","FoodChoice5")
lable.innerHTML="FoodChoice5"
var select=createElement("select")
select.setAttribute("id","FoodChoice5")
select.setAttribute("class","form-control required")
var option1=createElement("option")
var option2=createElement("option")
var option3=createElement("option")
var option4=createElement("option")
var option5=createElement("option")
option1.innerHTML="Veg"
option2.innerHTML="Non-Veg"
option3.innerHTML="Veg with egg"
option4.innerHTML="Drinks"
option5.innerHTML="Salad"
select.append(option1,option2,option3,option4,option5)
Food5.append(lable,select)

food.append(Food1,Food2,Food3,Food4,Food5)
form.append(food)

var button=createElement("button")
button.setAttribute("type","button")
button.setAttribute("class","btn btn-primary btn-lg btn-block")
button.setAttribute("onclick","addData(document.getElementById('fname').value,document.getElementById('lname').value,document.getElementById('Gender').value,document.getElementById('Address').value,document.getElementById('State').value,document.getElementById('Pincode').value,document.getElementById('Country').value,document.getElementById('FoodChoice1').value,document.getElementById('FoodChoice2').value,document.getElementById('FoodChoice3').value,document.getElementById('FoodChoice4').value,document.getElementById('FoodChoice5').value)")
button.innerHTML="Submit"
form.append(button)


var container2=createElement("div")
container2.setAttribute("class","container")
container2.innerHTML="<br><br>"
var table=createElement("table")
table.setAttribute("class","table table-bordered table-dark")
container2.append(table)

var head=createElement("thead")
var tr=createElement("tr")
tr.setAttribute("class","col-md-12 col-lg-12 col-xl-12")
head.append(tr)
var th1=createElement("th")
th1.innerHTML="First-Name"
var th2=createElement("th")
th2.innerHTML="Last-Name"
var th3=createElement("th")
th3.innerHTML="Gender"
var th4=createElement("th")
th4.innerHTML="Address"
var th5=createElement("th")
th5.innerHTML="State"
var th6=createElement("th")
th6.innerHTML="Pincode"
var th7=createElement("th")
th7.innerHTML="Country"
var th8=createElement("th")
th8.innerHTML="Food-Choice1"
var th9=createElement("th")
th9.innerHTML="Food-Choice2"
var th10=createElement("th")
th10.innerHTML="Food-Choice3"
var th11=createElement("th")
th11.innerHTML="Food-Choice4"
var th12=createElement("th")
th12.innerHTML="Food-Choice5"

tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9,th10,th11,th12)

head.append(tr)
table.append(head)

var tbody=createElement("tbody")
tbody.setAttribute("id","tableData")
table.append(tbody)
document.body.append(container)
document.body.append(container2)

dataBase=[]
console.log(dataBase)
function addData(fname,lname,gender,Address,State,Pincode,country,FoodChoice1,FoodChoice2,FoodChoice3,FoodChoice4,FoodChoice5){
dataBase.push({
 
    FName:fname,
    LName:lname,
    Gender:gender,
    Addr:Address,
    State:State,
    Pin:Pincode,
    country:country,
    FC1:FoodChoice1,
    FC2:FoodChoice2,
    FC3:FoodChoice3,
    FC4:FoodChoice4,
    FC5:FoodChoice5
} );

document.getElementById("tableData").innerHTML +=("<tr>"
+"<td>"+dataBase[0].FName+"</td>"
+"<td>"+dataBase[0].LName+"</td>"
+"<td>"+dataBase[0].Gender+"</td>"
+"<td>"+dataBase[0].Addr+"</td>"
+"<td>"+dataBase[0].State+"</td>"
+"<td>"+dataBase[0].Pin+"</td>"
+"<td>"+dataBase[0].country+"</td>"
+"<td>"+dataBase[0].FC1+"</td>"
+"<td>"+dataBase[0].FC2+"</td>"
+"<td>"+dataBase[0].FC3+"</td>"
+"<td>"+dataBase[0].FC4+"</td>"
+"<td>"+dataBase[0].FC5+"</td>"
+"</tr>")

}
