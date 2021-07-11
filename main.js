function findGrade() {
    // take  input
    let bangla = document.getElementById('bangla').value;
    let english = document.getElementById('english').value;
    let ict = document.getElementById('ict').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let biology = document.getElementById('biology').value;
    let math = document.getElementById('math').value;

    // pass value to function
    let banglaGrade = calculateGrade(bangla);
    let englishGrade = calculateGrade(english);
    let ictGrade = calculateGrade(ict);
    let physicsGrade = calculateGrade(physics);
    let chemistryGrade = calculateGrade(chemistry);
    let biologyGrade = calculateGrade(biology);
    let mathGrade = calculateGrade(math);

    // show element in browser
    document.getElementById('show-result').innerHTML =
        'Bangla: ' + bangla + '<br/> Grade: ' + banglaGrade + '<br/> English: ' + english +
        '<br/> Grade: ' + englishGrade + ' <br/> ICT: ' + ict +
        '<br/> Grade: ' + ictGrade + ' <br/> Physics : ' + physics +
        '<br/> Grade: ' + physicsGrade + ' <br/> Chemistry : ' + chemistry +
        '<br/> Grade: ' + chemistryGrade + ' <br/> Biology : ' + biology +
        '<br/> Grade: ' + biologyGrade + '<br/> Higher Math : ' + math +
        '<br/> Grade: ' + mathGrade;


    // create function to find the value of result 
    function calculateGrade(num) {

        if (num < 0 || num > 100) {
            // console.log('give a number between0 to 100');
            // document.getElementById('show-result').innerHTML = "give a number between0 to 100 "
            return 'give a valid number'
        } else if (num >= 33 && num < 40) {
            // console.log('B');
            // document.getElementById('show-result').innerHTML = "B"
            return " B"
        } else if (num >= 40 && num < 50) {
            // console.log('C');
            // document.getElementById('show-result').innerHTML = "C"
            return 'C'
        } else if (num >= 50 && num < 60) {
            // console.log('D');
            // document.getElementById('show-result').innerHTML = "D"
            return "D"
        } else if (num >= 60 && num < 70) {
            // console.log('A-');
            // document.getElementById('show-result').innerHTML = "A-"
            return 'A-'
        } else if (num >= 70 && num < 80) {
            // console.log('A');
            // document.getElementById('show-result').innerHTML = "A"
            return 'A'
        } else if (num >= 80 && num <= 100) {
            // console.log('A+');
            // document.getElementById('show-result').innerHTML = "A+"
            return 'A+'
        } else {
            // console.log('faill');
            // document.getElementById('show-result').innerHTML = "faill"
            return 'fail'
        }
    }


}