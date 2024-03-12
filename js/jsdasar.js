var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


    let vari = document.getElementById('var');
    let leti = document.getElementById('let');
    let jumlah = document.getElementById('penjumlahan');
    let infinity = document.getElementById('infinity');
    let bignit = document.getElementById('bignit');
    let string = document.getElementById('string');
    let boolean = document.getElementById('boolean');
    let undifined = document.getElementById('undifined');
    let nulll = document.getElementById('null');
    let symbol = document.getElementById('symbol');
    let object = document.getElementById('object');
    let numberCon = document.getElementById('kon-number');
    let stringCon = document.getElementById('kon-string');
    let boolCon = document.getElementById('kon-boolean');
    let aritmatika = document.getElementById('aritmatika');
    let perbandingan = document.getElementById('perbandingan');
    let logika = document.getElementById('logika');
    let bitwise = document.getElementById('bitwise');
    let ternary = document.getElementById('ternary');
    let alertt = document.getElementById('alert');
    let promptt = document.getElementById('prompt');
    let confirmm = document.getElementById('confirm');
    let iff = document.getElementById('if');
    let ifElsee = document.getElementById('if-else');
    let elseIff = document.getElementById('else-if');
    let switchh = document.getElementById('switch');
    let forr = document.getElementById('for');
    let whilee = document.getElementById('while');
    let doWhilee = document.getElementById('do-while');
    let breakk = document.getElementById('break');
    let continuee = document.getElementById('continue');
    
    vari.onclick = function() {
        var x = 10;
        if (true) {
            var x = 20;
            console.log("Nilai x di dalam blok :", x);
        }
        console.log("Nilai x di luar blok :", x);
    }
    
    leti.onclick = function() {
        let y = 10;
        if (true) {
            let y = 20;
            console.log("Nilai y di dalam blok :", y);
        }
        console.log("Nilai y di luar blok :", y);
    }
    
    jumlah.onclick = function() {
        let bulat = 25;
        let desimal = 25.2;
    
        document.writeln(bulat)
        document.writeln('<br>')
        document.writeln(desimal)
        document.writeln('<br>')
        document.writeln("Hasil Penjumlahan")
        document.writeln(desimal + bulat)
    }
    
    infinity.onclick = function() {
        let bulat = 25
        let string = 'a'
    
        document.writeln(bulat/0)
        document.writeln('<br>')
        document.writeln(string/5)
    }
    
    bignit.onclick = function() {
        let bulat = 123124414124142413n
    
        document.writeln(bulat)
    }
    
    string.onclick = function() {
        let text = "arkatama"
    
        document.writeln(text)
    }
    
    boolean.onclick = function() {
        let admin = true
        let perbandingan = 15 > 9
    
        document.writeln(perbandingan)
    }
    
    undifined.onclick = function() {
        let admin
    
        document.writeln(admin)
    }
    
    nulll.onclick = function() {
        let admin = null
    
        document.writeln(admin)
    }
    
    symbol.onclick = function() {
        let employee = Symbol('Joko')
    
        console.log(employee)
        console.log(employee.description)
    }
    
    object.onclick = function() {
        let employee = {
            name : "john",
            age : 30,
            job : "web developer",
            isMarried : false,
        }
        document.write('My name is ${employee.name} and he is ${employee.age} years old')
    }
    
    numberCon.onclick = function() {
        let str = "123"
        let nbr = Number("123")
    
        alert(typeof nbr)
    }
    
    stringCon.onclick = function() {
        let value = false
        let string = String(value)
    
        alert(typeof value)
    }
    
    boolCon.onclick = function() {
        alert(Boolean(0))
        alert(Boolean(1))
    }
    
    aritmatika.onclick = function() {
        let a = 3
        let b = 5
    
        console.log(a+b)
        console.log(a-b)
        console.log(a*b)
        console.log(a/b)
        console.log(a%b)
    }
    
    perbandingan.onclick = function() {
        let a = 3
        let b = 5
    
        console.log(a==b)
        console.log(a<b)
        console.log(a>b)
        console.log(a!=b)
    }
    
    logika.onclick = function() {
        let a = 3
        let b = 5
    
        console.log(a&&b)
        console.log(a||b);
        console.log(!a);
    }
    
    bitwise.onclick = function() {
        let a = 3
        let b = 5
    
        console.log(a&b);
        console.log(a|b);
        console.log(a^b);
        console.log(~a);
    }
    
    ternary.onclick = function() {
        let a = 3
        let b = 5
    
        console.log(a==b ? 'sama' : 'tidak sama');
    }
    
    alertt.onclick = function() {
        alert('Hallo Selamat datang di Arkatama')
    }
    
    promptt.onclick = function() {
        let string = prompt("Apakah kamu mau makan malam denganku?")
        alert('Jawaban Anda ' + string)
    }
    
    confirmm.onclick = function() {
        let string = confirm("Apakah kamu mau makan malam denganku?")
        string ? alert('Jawaban Anda mau') : alert('Jawaban Anda tidak mau')
    }
    
    iff.onclick = function() {
        let string = confirm("Apakah kamu mau makan malam denganku?")
        if (string) {
            alert('Jawaban Anda mau')
        }
    }
    
    ifElsee.onclick = function() {
        let string = confirm("Apakah kamu mau makan malam denganku?")
        if (string) {
            alert('Jawaban Anda mau')
        }else{
            alert('Jawaban Anda tidak mau')
        }
    }
    
    elseIff.onclick = function() {
        let string = prompt("1 + 1 ?")
        if (string = 2) {
            alert('Jawaban anda Betul')
        }else if (string > 2) {
            alert('Jawaban anda Kelebihan')
        }else if (string < 2) {
            alert('Jawaban anda Kurang')
        }else{
            alert('Jawaban Anda Salah')
        }
    }
    
    switchh.onclick = function() {
        let string = "blue"
        switch (string) {
        case "red":
            alert('I Love Red!')
            break;
        case "blue":
            alert('I Love Blue!')
            break;
        default:
            alert('I dont know what color is!')
            break;
        }
    }
    
    forr.onclick = function() {
        for (let i = 1; i < 5; i++){
            document.writeIn(i)
            document.writeIn("<br>")
        }
    }
    
    whilee.onclick = function() {
        let b = 1
        while (b<5) {
            document.writeIn(b)
            document.writeIn("<br>")
            b++
        }
    }
    
    doWhilee.onclick = function() {
        let i = 1;
        document.writeIn('Perulangan do while')
        document.writeIn("<br>")
        do {
            document.writeIn(i)
            document.writeIn("<br>")
            i++
        } while (i<5);
    }
    
    breakk.onclick = function() {
        document.writeIn('Perulangan for')
        document.writeIn("<br>")
        for (let a = 1; a < 5; a++) {
            if (a == 3){
                break
            }
            document.writeIn(a)
            document.writeIn("<br>")
        }
    }
    
    continuee.onclick = function() {
        document.writeIn('Perulangan for')
        document.writeIn("<br>")
        for (let a = 1; a < 5; a++) {
            if (a == 3){
                continue
            }
            document.writeIn(a)
            document.writeIn("<br>")
        }
    }