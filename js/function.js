/*
    
    Every book has a function but i do not know how to convert it into one and i think thats impossible

*/

function php_5(){

    //define variables
    var php_5_total = 0;
    var php_5_quan = document.getElementById('php_5_quan').value;
    var php_5_price = document.getElementById('php_5_price').value;

    //formula
    php_5_total = php_5_quan * php_5_price;

    //display total price
    document.getElementById('php_5_total').innerHTML = php_5_total;

    alert('Added to cart');

    //display all book informations
    document.getElementById('books_items').innerHTML = "<h3>Learning PHP</h3>";
    document.getElementById('books_quantity').innerHTML = php_5_quan;
    document.getElementById('books_price').innerHTML = php_5_price;
    document.getElementById('books_total').innerHTML = php_5_total;
}

function python(){

    var python_total = 0;
    var python_quan = document.getElementById('python_quan').value;
    var python_price = document.getElementById('python_price').value;

    python_total = python_quan * python_price;

    document.getElementById('python_total').innerHTML = python_total;

    alert('Added to cart');

    document.getElementById('books_items').innerHTML = "<h3>Learning Python</h3>";
    document.getElementById('books_quantity').innerHTML = python_quan;
    document.getElementById('books_price').innerHTML = python_price;
    document.getElementById('books_total').innerHTML = python_total;
}

function tcp_ip(){

    var tcp_ip_total = 0;
    var tcp_ip_quan = document.getElementById('tcp_ip_quan').value;
    var tcp_ip_price = document.getElementById('tcp_ip_price').value;

    tcp_ip_total = tcp_ip_quan * tcp_ip_price;

    document.getElementById('tcp_ip_total').innerHTML = tcp_ip_total;

    alert('Added to cart');

    document.getElementById('books_items').innerHTML = "<h3>TCP IP Network Admin</h3>";
    document.getElementById('books_quantity').innerHTML = tcp_ip_quan;
    document.getElementById('books_price').innerHTML = tcp_ip_price;
    document.getElementById('books_total').innerHTML = tcp_ip_total;
}

function html_css(){

    var html_css_total = 0;
    var html_css_quan = document.getElementById('html_css_quan').value;
    var html_css_price = document.getElementById('html_css_price').value;

    html_css_total = html_css_quan * html_css_price;

    document.getElementById('html_css_total').innerHTML = html_css_total;

    alert('Added to cart');

    document.getElementById('books_items').innerHTML = "<h3>HTML & CSS</h3>";
    document.getElementById('books_quantity').innerHTML = html_css_quan;
    document.getElementById('books_price').innerHTML = html_css_price;
    document.getElementById('books_total').innerHTML = html_css_total;
}

//Learn Java Book
function learn_java(){

    var learn_java_total = 0;
    var learn_java_quan = document.getElementById('learn_java_quan').value;
    var learn_java_price = document.getElementById('learn_java_price').value;

    learn_java_total = learn_java_quan * learn_java_price;

    document.getElementById('learn_java_total').innerHTML = learn_java_total;

    alert('Added to cart');


    document.getElementById('books_items').innerHTML = "<h3>Learning Java</h3>";
    document.getElementById('books_quantity').innerHTML = learn_java_quan;
    document.getElementById('books_price').innerHTML = learn_java_price;
    document.getElementById('books_total').innerHTML = learn_java_total;
}

function javascript(){

    var javascript_total = 0;
    var javascript_quan = document.getElementById('javascript_quan').value;
    var javascript_price = document.getElementById('javascript_price').value;

    javascript_total = javascript_quan * javascript_price;

    document.getElementById('javascript_total').innerHTML = javascript_total;

    alert('Added to Cart');

    document.getElementById('books_items').innerHTML = "<h3>Javascript</h3>";
    document.getElementById('books_quantity').innerHTML = javascript_quan;
    document.getElementById('books_price').innerHTML = javascript_price;
    document.getElementById('books_total').innerHTML = javascript_total;
}

function csharp_nutshell(){

    var csharp_nutshell_total = 0;
    var csharp_nutshell_quan = document.getElementById('csharp_nutshell_quan').value;
    var csharp_nutshell_price = document.getElementById('csharp_nutshell_price').value;

    csharp_nutshell_total = csharp_nutshell_quan * csharp_nutshell_price;

    document.getElementById('csharp_nutshell_total').innerHTML = csharp_nutshell_total;

    alert('Added to cart');

    document.getElementById('books_items').innerHTML = "<h3>CSharp 6.0 in a Nutshell</h3>";
    document.getElementById('books_quantity').innerHTML = csharp_nutshell_quan;
    document.getElementById('books_price').innerHTML = csharp_nutshell_price;
    document.getElementById('books_total').innerHTML = csharp_nutshell_total;

}

function ai_python(){

    var ai_python_total = 0;
    var ai_python_quan = document.getElementById('ai_python_quan').value;
    var ai_python_price = document.getElementById('ai_python_price').value;

    ai_python_total = ai_python_quan * ai_python_price;

    document.getElementById('ai_python_total').innerHTML = ai_python_total;

    alert('Added to Cart');

    document.getElementById('books_items').innerHTML = "<h3>AI with Python</h3";
    document.getElementById('books_quantity').innerHTML = ai_python_quan;
    document.getElementById('books_price').innerHTML = ai_python_price;
    document.getElementById('books_total').innerHTML = ai_python_total;

}

function oop(){

    var oop_total = 0;
    var oop_quan = document.getElementById('oop_quan').value;
    var oop_price = document.getElementById('oop_price').value;

    oop_total = oop_quan * oop_price;

    document.getElementById('oop_total').innerHTML = oop_total;

    alert('Added to Cart');

    document.getElementById('books_items').innerHTML = "<h3>OOP using C++</h3>";
    document.getElementById('books_quantity').innerHTML = oop_quan;
    document.getElementById('books_price').innerHTML = oop_price;
    document.getElementById('books_total').innerHTML = oop_total;

}

function dsa_python(){

    var dsa_python_total = 0;
    var dsa_python_quan = document.getElementById('dsa_python_quan').value;
    var dsa_python_price = document.getElementById('dsa_python_price').value;

    dsa_python_total = dsa_python_quan * dsa_python_price;

    document.getElementById('dsa_python_total').innerHTML = dsa_python_total;

    alert('Added to Cart');

    document.getElementById('books_items').innerHTML = "<h3>DSA using Python</h3>";
    document.getElementById('books_quantity').innerHTML = dsa_python_quan;
    document.getElementById('books_price').innerHTML = dsa_python_price;
    document.getElementById('books_total').innerHTML = dsa_python_total;
    
}

function learn_sql(){

    var learn_sql_total = 0;
    var learn_sql_quan = document.getElementById('learn_sql_quan').value;
    var learn_sql_price = document.getElementById('learn_sql_price').value;

    learn_sql_total = learn_sql_quan * learn_sql_price;

    document.getElementById('learn_sql_total').innerHTML = learn_sql_total;
    
    alert('Added to cart');

    document.getElementById('books_items').innerHTML = "<h3>Learning SQL</h3>";
    document.getElementById('books_quantity').innerHTML = learn_sql_quan;
    document.getElementById('books_price').innerHTML = learn_sql_price;
    document.getElementById('books_total').innerHTML = learn_sql_total;
}


function machine_learning(){

    var machine_learning_total = 0;
    var machine_learning_quan = document.getElementById('machine_learning_quan').value;
    var machine_learning_price = document.getElementById('machine_learning_price').value;

    machine_learning_total = machine_learning_quan * machine_learning_price;

    document.getElementById('machine_learning_total').innerHTML = machine_learning_total;

    alert('Added to cart');

    document.getElementById('books_items').innerHTML = "<h3>Machine Learning in Python</h3>";
    document.getElementById('books_quantity').innerHTML = machine_learning_quan;
    document.getElementById('books_price').innerHTML = machine_learning_price;
    document.getElementById('books_total').innerHTML = machine_learning_total;      
}

//Generate button --> generate overall Price but its not working
function generate(){
    
    var overallPrice = 0;

    var php_5_total = document.getElementById('php_5_total').value;
    var python_total = document.getElementById('python_total').value;
    var tcp_ip_total = document.getElementById('tcp_ip_total').value;
    var html_css_total = document.getElementById('html_css_total').value;
    var ai_python_total = document.getElementById('ai_python_total').value;
    var csharp_nutshell_total = document.getElementById('csharp_nutshell_total').value;
    var javascript_total = document.getElementById('javascript_total').value;
    var learn_java_total = document.getElementById('learn_java_total').value;
    var oop_total = document.getElementById('oop_total').value;
    var learn_sql_total = document.getElementById('learn_sql_total').value;
    var machine_learning_total = document.getElementById('machine_learning_total').value;

    overallPrice = php_5_total + python_total + tcp_ip_total + html_css_total + ai_python_total 
    + csharp_nutshell_total + javascript_total + learn_java_total + oop_total;

    alert('This button doesnt do anything');
    
    document.getElementById('overallPrice').innerHTML = overallPrice;
}

//Sign Up Form
function registerForm(){

    //define user variables
    var lastname = document.getElementById('lastname').value;
    var firstname = document.getElementById('firstname').value;
    var midname = document.getElementById('midname').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('conf_pass').value;

    //Email validation
    var atpos = email.indexOf("@");
    var dotpos = email.indexOf(".");

    //condtions
    if (lastname == "" || firstname == "" || midname == "" || username == "") {
        alert('Please input all fields');
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert('Invalid email address');
    } else if (password != confirm_password) {
        alert('Password do not match try again');
    } else {
        alert('Sucessfully registered');
        
    }
}
