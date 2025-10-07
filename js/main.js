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
    // ----------------------------------------------------------------
    // 💡 الأجزاء اللي تم نقلها لوضعها في المكان الصحيح (تشتغل مرة واحدة)
    // 1. تعريف كائن البيانات كاملاً
    const workoutsInfo = {
        'الكارديو': {
            head: "تمارين الكارديو (تمارين القلب)",
            text: "تعتبر تمارين الكارديو (القلب) حجر الزاوية في أي روتين لياقة بدنية. هي التمارين التي ترفع معدل ضربات قلبك وتجعل جسمك يضخ الدم بكفاءة، مما يحسن صحة قلبك ورئتيك.  من الجري وركوب الدراجات إلى السباحة والمشي السريع، تساعدك تمارين الكارديو على حرق السعرات الحرارية، تقليل دهون الجسم، وزيادة قدرة تحملك، لتشعر بنشاط أكبر وحيوية لا مثيل لها",
            exercises: [
                {
                    name: "الجري",
                    description: "تمرين أساسي وفعال جدًا لحرق السعرات الحرارية وتقوية القلب والرئتين. يمكنك ممارسته في الهواء الطلق أو على جهاز المشي (treadmill)."
                    , src: "imgs/running.webp"
                },
                {
                    name: "ركوب الدراجة",
                    description: "تمرين منخفض التأثير على المفاصل، وممتاز لتقوية عضلات الساقين وزيادة قدرة التحمل. يمكن ممارسته بالخارج أو على دراجة ثابتة (stationary bike) في الجيم."
                    , src: "imgs/cycling.webp"
                },
                {
                    name: "السباحة",
                    description: "تمرين لكامل الجسم، حيث يعمل على تقوية جميع العضلات الرئيسية دون إجهاد المفاصل. تُعد السباحة خيارًا ممتازًا لزيادة اللياقة البدنية والتحمل."
                    , src: "imgs/swimming.webp"
                }
            ]
        },
        'القوة': {
            head: "تمارين القوة",
            text: "إذا كان هدفك هو بناء عضلات أقوى أو تشكيل جسمك، فإن تمارين القوة هي خيارك الأمثل. هي التمارين التي تستخدم المقاومة (سواء من وزن الجسم أو الأوزان الحرة) لزيادة كتلتك العضلية وقوتك. لا تقتصر فوائدها على المظهر الجسدي فقط، بل تساهم في تسريع عملية الأيض، تقوية العظام، وتحسين توازن الجسم. ابدأ بأوزان خفيفة وزدها تدريجيًا لتحقق أفضل النتائج.",
            exercises: [
                {
                    name: "القرفصاء (Squats)",
                    description: "تمرين أساسي يعمل على تقوية عضلات الجزء السفلي من الجسم بالكامل، بما في ذلك الفخذين، وأوتار الركبة، والأرداف. يمكن ممارسته باستخدام وزن الجسم أو الأوزان الحرة (dumbbells)."
                    , src: "imgs/squat.webp"
                },
                {
                    name: "تمرين الضغط (Push-ups)",
                    description: "تمرين فعال لتقوية عضلات الجزء العلوي من الجسم، خاصة عضلات الصدر، والكتفين، والذراعين. يمكن تعديله ليناسب جميع المستويات."
                    , src: "imgs/push-up.webp"
                },
                {
                    name: "الاندفاع (Lunges)",
                    description: "تمرين ممتاز لتحسين التوازن والقوة في كل ساق على حدة. يعمل على عضلات الفخذ والأرداف بشكل كبير."
                    , src: "imgs/lunges.webp"
                }
            ]
        },
        'المرونة': {
            head: "تمارين المرونة (تمارين الإطالة)",
            text: "غالبًا ما يتم تجاهل تمارين المرونة، ولكنها أساسية لأي برنامج لياقة متكامل. هي تمارين الإطالة التي تهدف إلى زيادة نطاق حركة مفاصلك وتجعل عضلاتك أكثر ليونة. ممارستها بانتظام تساعد على تقليل خطر الإصابات، تخفف آلام العضلات بعد التمرين، وتحسن من وضعية جسدك. خصص بعض الوقت لتمارين المرونة لتشعر بالراحة والاسترخاء في جسدك.",
            exercises: [
                {
                    name: "إطالة أوتار الركبة (Hamstring Stretch)",
                    description: "استلقِ على ظهرك وارفع ساقًا واحدة ببطء، واسحبها برفق باتجاه صدرك. هذا يساعد على تخفيف الضيق في الجزء الخلفي من الفخذين."
                    , src: "imgs/hamstring-stretch.webp"
                },
                {
                    name: "إطالة أوتار الصدر (Chest Stretch)",
                    description: "قف عند مدخل باب وضع ذراعيك على جانبي الباب، ثم ادفع صدرك إلى الأمام ببطء. هذا التمرين مفيد جدًا إذا كنت تجلس لفترات طويلة."
                    , src: "imgs/chest-stretch.webp"
                },
                {
                    name: "لفة العمود الفقري (Spinal Twist)",
                    description: "استلقِ على ظهرك وافرد ذراعيك على الجانبين على شكل حرف T. ارفع ركبتيك معاً ثم اخفضهما ببطء إلى جانب واحد (يمين)، مع إبقاء كتفيك ملتصقين بالأرض. اثبت لعدة ثوانٍ ثم كرر الحركة على الجانب الآخر (يسار). هذا التمرين ممتاز لتمديد أسفل الظهر والعمود الفقري."
                    , src: "imgs/spinal-twist.webp"
                }
            ]
        }
    };
    
    // 2. تعريف دالة التحميل المسبق (Preloading Function)
    function preloading(infodata){
        let allimagesrc = [];

        // جمع كل مسارات الصور من الأوبجيكت
        for (const type in infodata){
            if (infodata.hasOwnProperty(type)){
                infodata[type].exercises.forEach(exercise => {
                    allimagesrc.push(exercise.src);
                })
            }
        }
        
        // بدء التحميل في الخلفية باستخدام new Image()
        allimagesrc.forEach(src => {
            const img = new Image(); // ⬅️ تصحيح استخدام 'Image' بحرف 'I' كبير
            img.src = src;
        })
    }

    // 3. استدعاء الدالة لتشغيل التحميل المسبق فورا (مرة واحدة)
    preloading(workoutsInfo);
    // ----------------------------------------------------------------

    // تهيئة الزرار النشط الأولي (هنا يتم استخدام workoutsInfo لأول مرة)
    const initialActiveButton = document.querySelector('.workout-types .btn.active');
    if (initialActiveButton) {
        activeBg.style.width = initialActiveButton.offsetWidth + 'px';
        activeBg.style.left = initialActiveButton.offsetLeft + 'px';

        infoheader.textContent = "تمارين الكارديو (تمارين القلب)";
        info.textContent = "تعتبر تمارين الكارديو (القلب) حجر الزاوية في أي روتين لياقة بدنية. هي التمارين التي ترفع معدل ضربات قلبك وتجعل جسمك يضخ الدم بكفاءة، مما يحسن صحة قلبك ورئتيك.  من الجري وركوب الدراجات إلى السباحة والمشي السريع، تساعدك تمارين الكارديو على حرق السعرات الحرارية، تقليل دهون الجسم، وزيادة قدرة تحملك، لتشعر بنشاط أكبر وحيوية لا مثيل لها";
    }

    btns.forEach(button => {
        button.addEventListener('click', () => {
            // كود الـ click event: الآن التحميل المسبق تم بالفعل في الخلفية

            let currentActiveBtn = document.querySelector('.workout-types .btn.active');
            if (currentActiveBtn) {
                currentActiveBtn.classList.remove('active');
            }

            button.classList.add('active');

            const buttonText = button.querySelector('.text').textContent.trim();

            const selectedInfo = workoutsInfo[buttonText]; // بيستخدم الأوبجيكت اللي تم تعريفه في الأعلى

            if (selectedInfo) {
                infoheader.textContent = selectedInfo.head;
                info.textContent = selectedInfo.text;
                selectedInfo.exercises.forEach((exercise, index) => {
                    if (trainingimg[index]) {
                        // 💡 هذا الكود أصبح الآن فوريًا لأنه بيجيب الصورة من الكاش
                        trainingimg[index].src = exercise.src;
                    }
                });
            }

            activeBg.style.width = button.offsetWidth + 'px';
            activeBg.style.left = button.offsetLeft + 'px';
        });
    });
}
switchbtn();