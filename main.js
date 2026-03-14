let benefits = document.getElementsByClassName("benefits")[0];
let container = document.querySelector('.benefits .container');

let nut = document.getElementsByClassName('nutrition')[0]
let image = document.getElementsByClassName('image')[0];
let nutritionIntroText = document.querySelector('.nutrition .intro .text');

let rate = document.querySelector('.rate');
let progressbar = document.querySelectorAll('.progress-bar')

let tips = document.querySelector('.tips');
let tipsboxes = document.querySelectorAll('.tips-content .box');

let btns = document.querySelectorAll('.workout-types .btn');
let activeBg = document.querySelector('.workout-types .active-bg');
let text = document.querySelectorAll('.workout-types .text');

let infoheader = document.querySelector('.info .info-head');
let info = document.querySelector('.info .info-text');

let trainingimg = document.querySelectorAll(".training");

let cardhead = document.querySelectorAll('.body h3');
let cardparagraph = document.querySelectorAll('.body p');
let time = document.querySelectorAll('.card .footer .time');

let workout = document.querySelector('.workout');
let workouttext = document.querySelector('.workout .intro .text');
let workoutimage = document.querySelector('.workout .intro .image');

let inputs = document.querySelectorAll('.input-group input');
let bmibtn = document.querySelector('.calculate-btn');

const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const ageInput = document.getElementById('age');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const resultValue = document.querySelector('.result-value');
const resultBox = document.querySelector('.result-box');
const actionPlan = document.getElementById('ai-plan-result');
const resultdesc = document.querySelector('.enter-data-btn');

const API_URL = 'http://localhost:5000/api/fitlife';

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
    if (window.scrollY >= workout.offsetTop - 200) {
        workoutimage.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
        workoutimage.style.opacity = '1';
        workoutimage.style.transform = 'translateX(0)';

        workouttext.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
        workouttext.style.opacity = '1';
        workouttext.style.transform = 'translateX(0)';
    }
});

function switchbtn() {
    const workoutsInfo = {
        'الكارديو': {
            head: "تمارين الكارديو (تمارين القلب)",
            text: "تعتبر تمارين الكارديو (القلب) حجر الزاوية في أي روتين لياقة بدنية. هي التمارين التي ترفع معدل ضربات قلبك وتجعل جسمك يضخ الدم بكفاءة، مما يحسن صحة قلبك ورئتيك. من الجري وركوب الدراجات إلى السباحة والمشي السريع، تساعدك تمارين الكارديو على حرق السعرات الحرارية، تقليل دهون الجسم، وزيادة قدرة تحملك، لتشعر بنشاط أكبر وحيوية لا مثيل لها",
            exercises: [
                {
                    name: "الجري (Running)",
                    description: "تمرين أساسي وفعال جدًا لحرق السعرات الحرارية وتقوية القلب والرئتين. يمكنك ممارسته في الهواء الطلق أو على جهاز المشي (treadmill).",
                    time: "30 دقيقة",
                    src: "imgs/running.webp"
                },
                {
                    name: "ركوب الدراجة (cycling)",
                    description: "تمرين منخفض التأثير على المفاصل، وممتاز لتقوية عضلات الساقين وزيادة قدرة التحمل. يمكن ممارسته بالخارج أو على دراجة ثابتة (stationary bike) في الجيم.",
                    time: "45 دقيقة", // 💡 Added time in minutes
                    src: "imgs/cycling.webp"
                },
                {
                    name: "السباحة (Swimming)",
                    description: "تمرين لكامل الجسم، حيث يعمل على تقوية جميع العضلات الرئيسية دون إجهاد المفاصل. تُعد السباحة خيارًا ممتازًا لزيادة اللياقة البدنية والتحمل.",
                    time: "30 دقيقة",
                    src: "imgs/swimming.webp"
                }
            ]
        },
        'القوة': {
            head: "تمارين القوة",
            text: "إذا كان هدفك هو بناء عضلات أقوى أو تشكيل جسمك، فإن تمارين القوة هي خيارك الأمثل. هي التمارين التي تستخدم المقاومة (سواء من وزن الجسم أو الأوزان الحرة) لزيادة كتلتك العضلية وقوتك. لا تقتصر فوائدها على المظهر الجسدي فقط، بل تساهم في تسريع عملية الأيض، تقوية العظام، وتحسين توازن الجسم. ابدأ بأوزان خفيفة وزدها تدريجيًا لتحقق أفضل النتائج.",
            exercises: [
                {
                    name: "القرفصاء (Squats)",
                    description: "تمرين أساسي يعمل على تقوية عضلات الجزء السفلي من الجسم بالكامل، بما في ذلك الفخذين، وأوتار الركبة، والأرداف. يمكن ممارسته باستخدام وزن الجسم أو الأوزان الحرة (dumbbells).",
                    time: "15 دقيقة",
                    src: "imgs/squat.webp"
                },
                {
                    name: "تمرين الضغط (Push-ups)",
                    description: "تمرين فعال لتقوية عضلات الجزء العلوي من الجسم، خاصة عضلات الصدر، والكتفين، والذراعين. يمكن تعديله ليناسب جميع المستويات.",
                    time: "10 دقائق",
                    src: "imgs/push-up.webp"
                },
                {
                    name: "الاندفاع (Lunges)",
                    description: "تمرين ممتاز لتحسين التوازن والقوة في كل ساق على حدة. يعمل على عضلات الفخذ والأرداف بشكل كبير.",
                    time: "15 دقيقة",
                    src: "imgs/lunges.webp"
                }
            ]
        },
        'المرونة': {
            head: "تمارين المرونة (تمارين الإطالة)",
            text: "غالبًا ما يتم تجاهل تمارين المرونة، ولكنها أساسية لأي برنامج لياقة متكامل. هي تمارين الإطالة التي تهدف إلى زيادة نطاق حركة مفاصلك وتجعل عضلاتك أكثر ليونة. ممارستها بانتظام تساعد على تقليل خطر الإصابات، تخفف آلام العضلات بعد التمرين، وتحسن من وضعية جسدك. خصص بعض الوقت لتمارين المرونة لتشعر بالراحة والاسترخاء في جسدك.",
            exercises: [
                {
                    name: "إطالة أوتار الركبة (Hamstring Stretch)",
                    description: "استلقِ على ظهرك وارفع ساقًا واحدة ببطء، واسحبها برفق باتجاه صدرك. هذا يساعد على تخفيف الضيق في الجزء الخلفي من الفخذين.",
                    time: "5 دقائق",
                    src: "imgs/Hamstring-Stretch.webp"
                },
                {
                    name: "إطالة أوتار الصدر (Chest Stretch)",
                    description: "قف عند مدخل باب وضع ذراعيك على جانبي الباب، ثم ادفع صدرك إلى الأمام ببطء. هذا التمرين مفيد جدًا إذا كنت تجلس لفترات طويلة.",
                    time: "3 دقائق",
                    src: "imgs/chest-stretch.webp"
                },
                {
                    name: "لفة العمود الفقري (Spinal Twist)",
                    description: "استلقِ على ظهرك وافرد ذراعيك على شكل حرف T. ارفع الركبتين معًا واخفضهما لجانب واحد ببطء، مع تثبيت الكتفين على الأرض. اثبت، ثم كرر على الجانب الآخر.",
                    time: "5 دقائق",
                    src: "imgs/spinal-twist.webp"
                }
            ]
        }
    };

    function preloading(infodata) {
        let allimagesrc = [];

        for (const type in infodata) {
            if (infodata.hasOwnProperty(type)) {
                infodata[type].exercises.forEach(exercise => {
                    allimagesrc.push(exercise.src);
                })
            }
        }

        allimagesrc.forEach(src => {
            const img = new Image();
            img.src = src;
        })
    }

    preloading(workoutsInfo);

    const initialActiveButton = document.querySelector('.workout-types .btn.active');
    if (initialActiveButton) {
        activeBg.style.width = initialActiveButton.offsetWidth + 'px';
        activeBg.style.left = initialActiveButton.offsetLeft + 'px';

        infoheader.textContent = "تمارين الكارديو (تمارين القلب)";
        info.textContent = "تعتبر تمارين الكارديو (القلب) حجر الزاوية في أي روتين لياقة بدنية. هي التمارين التي ترفع معدل ضربات قلبك وتجعل جسمك يضخ الدم بكفاءة، مما يحسن صحة قلبك ورئتيك.  من الجري وركوب الدراجات إلى السباحة والمشي السريع، تساعدك تمارين الكارديو على حرق السعرات الحرارية، تقليل دهون الجسم، وزيادة قدرة تحملك، لتشعر بنشاط أكبر وحيوية لا مثيل لها";
    }

    btns.forEach(button => {
        button.addEventListener('click', () => {

            let currentActiveBtn = document.querySelector('.workout-types .btn.active');
            if (currentActiveBtn) {
                currentActiveBtn.classList.remove('active');
            }

            button.classList.add('active');

            const buttonText = button.querySelector('.text').textContent.trim();

            const selectedInfo = workoutsInfo[buttonText];

            if (selectedInfo) {
                infoheader.textContent = selectedInfo.head;
                info.textContent = selectedInfo.text;
                selectedInfo.exercises.forEach((exercise, index) => {
                    if (trainingimg[index]) {
                        trainingimg[index].src = exercise.src;
                        cardhead[index].textContent = exercise.name;
                        cardparagraph[index].textContent = exercise.description;
                        time[index].textContent = exercise.time;
                    }
                });
            }

            activeBg.style.width = button.offsetWidth + 'px';
            activeBg.style.left = button.offsetLeft + 'px';
        });
    });
}

switchbtn();

function bmiSection() {
    const BMICategories = {
        underweight: 'نقص في الوزن',
        healthy: 'وزن صحي',
        overweight: 'زيادة في الوزن',
        obesity: 'سمنة'
    };

    bmibtn.addEventListener('click', () => {
        const height = heightInput.value;
        const weight = weightInput.value;
        const age = ageInput.value;

        let selectedGenderValue = null;
        genderInputs.forEach(input => {
            if (input.checked) {
                selectedGenderValue = input.value;
            }
        });

        let empty = false;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                empty = true;
                input.style.borderColor = 'red';
                setTimeout(() => {
                    input.style.borderColor = '#ccc';
                }, 2000);
            }
        });

        if (empty || !selectedGenderValue) {
            // toastify library
            Toastify({
                text: "برجاء ادخال جميع البيانات بما في ذلك تحديد النوع",
                duration: 3000,
                gravity: "top", // or "bottom"
                position: "right", // or "left"
                style: {
                    background: "red",
                    color: "black !important", // هنا بنغير لون الخط للأبيض مثلاً
                    fontSize: "18px", // ممكن كمان تكبر الخط لو تحب
                    fontWeight: "bold",
                    borderRadius: "10px"
                },
            }).showToast();
            return;
        }

        calculatebmi();
        fetchapiplan(age, selectedGenderValue, height, weight);
    })

    let bmiInterval = null;

    function calculatebmi() {
        if (weightInput.value > 0 && heightInput.value > 0) {
            if (bmiInterval !== null) {
                clearInterval(bmiInterval);
            }

            resultValue.textContent = '0.0';
            let counter = 0;
            let heightmeter = heightInput.value / 100;
            let bmi = (parseInt(weightInput.value) / Math.pow(parseFloat(heightmeter), 2));

            bmiInterval = setInterval(() => {
                const displayedValue = parseFloat(resultValue.textContent) + 0.1;

                if (displayedValue <= parseFloat(bmi)) {
                    resultValue.textContent = displayedValue.toFixed(1);
                } else {
                    clearInterval(bmiInterval);
                    resultValue.textContent = bmi;
                }
            }, 30);

            getBMICategory(bmi);
            console.log("BMI Calculated:", bmi);
        }

    }
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            resultdesc.textContent = BMICategories.underweight;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultdesc.textContent = BMICategories.healthy;
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultdesc.textContent = BMICategories.overweight;
        } else if (bmi >= 30) {
            resultdesc.textContent = BMICategories.obesity;
        } else {
            resultdesc.textContent = 'غير معروف';
        }
    }

    async function fetchapiplan(age, gender, height, weight) {

        actionPlan.innerHTML = '';
        actionPlan.innerHTML = '<span class="animate-pulse">... جاري تحليل بياناتك وتوليد الخطة</span>';

        const genderArabic = gender === 'male' ? 'ذكر' : 'أنثى';

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    age: parseInt(age),
                    height: parseInt(height),
                    weight: parseInt(weight),
                    gender: genderArabic,
                })
            });

            if (!response.ok) {
                let errorMsg = "حدث خطأ في الاتصال بالخادم";
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.error || errorMsg;
                } catch (e) {
                    errorMsg = `فشل في الاتصال (Code: ${response.status})`;
                }
                throw new Error(errorMsg);
            }

            let data = await response.json();
            let plan = data.response;

            actionPlan.innerHTML = '';
            actionPlan.innerHTML = plan.replace(/\n/g, '<br>');
        }
        catch (error) {
            console.error('AI Fetch Error:', error);
            actionPlan.innerHTML = '';
            actionPlan.innerHTML = `حدث خطأ: ${error.message || 'فشل الاتصال. الرجاء التأكد من تشغيل Node.js Server.'}`;
        }
    }

}
bmiSection();