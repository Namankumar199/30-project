const nextBtn = document.getElementById('nextbtn');
// const prevBtn = document.getElementById('prevBtn');
const topic = document.getElementById('topic');
let rows = []

let flag = true;
let count = 0;

const data = [{
    question: "What is your Name",
    options: ['Naman', 'kishan', 'Aman', 'Suraj'],
    answer: "Naman"
},
{
    question: "what's your hobby?",
    options: ['Reading', 'Roaming', 'ChillOut', 'Speaking'],
    answer: "Roaming"
},
{
    question: "which books do like to read?",
    options: ['Story', 'Fiction', 'Funny', 'Magics'],
    answer: "Funny"
},
{
    question: "what  is 2+4 ?",
    options: ['7', '4', '99', '6'],
    answer: "6"
},
{
    question: "what is 2*3 ?",
    options: ['4', '6', '5', '12'],
    answer: "6"
}

];

function elementCreate() {

    const questionDiv = document.createElement('div');
    questionDiv.innerText = `${count + 1}. ` + data[count].question;
    questionDiv.classList.add('question');
    topic.appendChild(questionDiv);

    for (i = 0; i < data[count].options.length; i++) {
        const answerDiv = document.createElement('div');
        answerDiv.innerText = data[count].options[i];
        answerDiv.setAttribute('id', `id${i}`);
        answerDiv.classList.add('row');
        topic.appendChild(answerDiv);
    }

    rows = document.querySelectorAll('.row');
    fun1(rows);
}

function fun1(rows) {

    rows.forEach(row => {
        row.addEventListener('click', () => {

            let data1 = row.textContent;
            let correctAns = data[count].answer;
            // let ques = document.querySelector('.question').textContent.slice(3);

            if (flag) {
                if (data1 === correctAns) {
                    row.classList.add('active');
                    toastFun('green', 'Correct Answer');
                    flag = false;
                } else {
                    // console.error('wrong data.');
                    row.classList.add('wrong');
                    toastFun('red', 'Wrong Answer');

                    flag = false;
                    for (r of rows) {
                        if (r.textContent == correctAns) {
                            r.classList.add('active');
                        }
                    }

                }
            }
        });

    });

}

nextBtn.addEventListener('click', () => {
    flag = true;
    if (count < 4) {
        count++;
        topic.replaceChildren();
        elementCreate();
    } else {
        toastFun('gray', 'Question Finished.')
    }
    console.log('next btn')
});

// prevBtn.addEventListener('click', () => {
//     flag = true;
//     if (count > 0) {
//         count--;
//         topic.replaceChildren();
//         elementCreate();
//     } else {
//         toastFun('gray', 'Question Finished.')
//     }
//     console.log('prev btn')
// });
elementCreate();

let timer = null

function toastFun(color1, text1) {
    let toast = document.querySelector('.toast');

    toast.style.display = 'block';
    toast.style.color = color1;
    toast.innerText = text1;

    setTimeout(() => {
        document.querySelector('.toast').style.display = 'none';
    }, 1000);

}