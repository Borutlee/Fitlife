let benefits = document.getElementsByClassName("benefits")[0];
let container = document.querySelector('.benefits .container');

let nut = document.getElementsByClassName('nutrition')[0]
let image = document.getElementsByClassName('image')[0];
let nutritionIntroText = document.querySelector('.nutrition .intro .text');

let rate = document.querySelector('.rate');
let progressbar = document.querySelectorAll('.progress-bar')

let tips = document.querySelector('.tips');
let tipsboxes = document.querySelectorAll('.tips-content .box');

let btns = document.querySelectorAll('.workout-types .btn')
let activeBg = document.querySelector('.workout-types .active-bg');
let text = document.querySelectorAll('.btns .text')

let infoheader = document.querySelector('.info .info-head');
let info = document.querySelector('.info .info-text');

window.addEventListener("scroll", function () {
    if (window.scrollY >= benefits.offsetTop - 200) {
        container.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }
    if (window.scrollY >= nut.offsetTop - 200) {
        image.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
        image.style.opacity = '1';
        image.style.transform = 'translateX(0)';
    }
    if (window.scrollY >= nut.offsetTop - 200) {
        nutritionIntroText.classList.add('show-nutrition-text');
    }
    if (window.scrollY >= rate.offsetTop - 200) {
        progressbar.forEach(span => {
            span.style.width = span.dataset.width + "%";
        });
    }
    if (window.scrollY >= rate.offsetTop - 200) {
        tipsboxes.forEach(box => {
            box.style.opacity = '1';
            box.style.transform = 'translateX(0)';
        });
    }
});

function switchbtn() {
    const initialActiveButton = document.querySelector('.workout-types .btn.active');
    if (initialActiveButton) {
        activeBg.style.width = initialActiveButton.offsetWidth + 'px';
        activeBg.style.left = initialActiveButton.offsetLeft + 'px';
    }
    btns.forEach(button => {
        button.addEventListener('click', () => {
            let infohead = ["تمارين الكارديو (تمارين القلب)",
                "تمارين الكارديو (تمارين القلب)",
                "تمارين المرونة (تمارين الإطالة)"];
            let infotext = ["تعتبر تمارين الكارديو (القلب) حجر الزاوية في أي روتين لياقة بدنية. هي التمارين التي ترفع معدل ضربات قلبك وتجعل جسمك يضخ الدم بكفاءة، مما يحسن صحة قلبك ورئتيك.  من الجري وركوب الدراجات إلى السباحة والمشي السريع، تساعدك تمارين الكارديو على حرق السعرات الحرارية، تقليل دهون الجسم، وزيادة قدرة تحملك، لتشعر بنشاط أكبر وحيوية لا مثيل لها.",
                "إذا كان هدفك هو بناء عضلات أقوى أو تشكيل جسمك، فإن تمارين القوة هي خيارك الأمثل. هي التمارين التي تستخدم المقاومة (سواء من وزن الجسم أو الأوزان الحرة) لزيادة كتلتك العضلية وقوتك.  لا تقتصر فوائدها على المظهر الجسدي فقط، بل تساهم في تسريع عملية الأيض، تقوية العظام، وتحسين توازن الجسم. ابدأ بأوزان خفيفة وزدها تدريجيًا لتحقق أفضل النتائج.",
                "غالبًا ما يتم تجاهل تمارين المرونة، ولكنها أساسية لأي برنامج لياقة متكامل. هي تمارين الإطالة التي تهدف إلى زيادة نطاق حركة مفاصلك وتجعل عضلاتك أكثر ليونة.  ممارستها بانتظام تساعد على تقليل خطر الإصابات، تخفف آلام العضلات بعد التمرين، وتحسن من وضعية جسدك. خصص بعض الوقت لتمارين المرونة لتشعر بالراحة والاسترخاء في جسدك."]

            // Step 1: Remove 'active' class from the currently active button
            let currentActiveBtn = document.querySelector('.workout-types .btn.active');
            if (currentActiveBtn) {
                currentActiveBtn.classList.remove('active');
            }

            // Step 2: Add 'active' class to the clicked button
            button.classList.add('active');

            activeBg.style.width = button.offsetWidth + 'px';
            activeBg.style.left = button.offsetLeft + 'px';
        
            text.forEach(e => {
                if (e.textContent == 'الكارديو'){
                    infoheader.textContent = infohead[0];
                    info.textContent = infotext[0];
                }
                if (e.textContent == 'القوة'){
                    infoheader.textContent = infohead[1];
                    info.textContent = infotext[1];
                }
                if (e.textContent == 'المرونة'){
                    infoheader.textContent = infohead[2];
                    info.textContent = infotext[2];
                }
            })
        });

    });
}

// function changeinfo() {
//     let infrohead = ["تمارين الكارديو (تمارين القلب)",
//         "تمارين الكارديو (تمارين القلب)",
//         "تمارين المرونة (تمارين الإطالة)"];
//     let infotext = ["تعتبر تمارين الكارديو (القلب) حجر الزاوية في أي روتين لياقة بدنية. هي التمارين التي ترفع معدل ضربات قلبك وتجعل جسمك يضخ الدم بكفاءة، مما يحسن صحة قلبك ورئتيك.  من الجري وركوب الدراجات إلى السباحة والمشي السريع، تساعدك تمارين الكارديو على حرق السعرات الحرارية، تقليل دهون الجسم، وزيادة قدرة تحملك، لتشعر بنشاط أكبر وحيوية لا مثيل لها.",
//         "إذا كان هدفك هو بناء عضلات أقوى أو تشكيل جسمك، فإن تمارين القوة هي خيارك الأمثل. هي التمارين التي تستخدم المقاومة (سواء من وزن الجسم أو الأوزان الحرة) لزيادة كتلتك العضلية وقوتك.  لا تقتصر فوائدها على المظهر الجسدي فقط، بل تساهم في تسريع عملية الأيض، تقوية العظام، وتحسين توازن الجسم. ابدأ بأوزان خفيفة وزدها تدريجيًا لتحقق أفضل النتائج.",
//         "غالبًا ما يتم تجاهل تمارين المرونة، ولكنها أساسية لأي برنامج لياقة متكامل. هي تمارين الإطالة التي تهدف إلى زيادة نطاق حركة مفاصلك وتجعل عضلاتك أكثر ليونة.  ممارستها بانتظام تساعد على تقليل خطر الإصابات، تخفف آلام العضلات بعد التمرين، وتحسن من وضعية جسدك. خصص بعض الوقت لتمارين المرونة لتشعر بالراحة والاسترخاء في جسدك."]

// }

switchbtn();