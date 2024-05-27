const questions = [

    {
        question: "A graphical tool which shows all possible production bundles for which the economy operates efficiently and all productive resources are fully utilized.",
        answers: [
          { text: "Production possibility frontier (PPF)", correct: true },
          { text: "Community indifference curve", correct: false },
        ]
    },

    {
        question: "The theory that suggests countries will export goods that use their abundant factors of production intensively.",
        answers: [
          { text: "Heckscher-Ohlin theory", correct: true },
          { text: "Stolper-Samuelson theorem", correct: false },
        ]
    },

    {
        question: "The process when average production costs decrease as the volume of production increases.",
        answers: [
          { text: "Economies of scale", correct: true },
          { text: "Marginal opportunity cost", correct: false },
        ]
    },
    
      
    {
        question: "A situation in which a country doesn't trade and is self-sufficient.",
        answers: [
          { text: "Autarky", correct: true },
          { text: "Trade offer curve", correct: false },
        ]
    },

    {
        question: "When products are similar but perceived as different due to branding, packaging, etc.",
        answers: [
          { text: "Differentiation", correct: true },
          { text: "Absolute advantage", correct: false },
        ]
    },
    
    {
        question: "The ratio at which two goods exchange on the market. In international trade this is the quantity of imports which a unit of the exported good can command.",
        answers: [
          { text: "Terms of trade", correct: true },
          { text: "Production possibility frontier (PPF)", correct: false },
        ]
    },

    {
        question: "A graphical tool which shows the aggregate preferences of the community for two goods. It consists of all bundles of the goods equally liked by the community.",
        answers: [
          { text: "Community Indifference Curve", correct: true },
          { text: "Trade offer curve", correct: false },
        ]
    },

    {
        question: "The principle that as the price of a traded good increases, the price of the factor, used more intensively in its production will increase even more.",
        answers: [
          { text: "Magnification effect", correct: true },
          { text: "Heckscher-Ohlin theory", correct: false },
        ]
    },

    {
        question: "The view that as a country opens up for trade the income of the owners of the relatively abundant factor will increase, while the income of the owners of the relatively scarce factor will decrease.",
        answers: [
          { text: "Stolper-Samuelson theorem", correct: true },
          { text: "Economies of scale", correct: false },
        ]
    },

    {
        question: "A term used to denote in what ratio are used the factors in the production of a given good.",
        answers: [
          { text: "Factor intensity", correct: true },
          { text: "Absolute advantage", correct: false },
        ]
    },

    {
        question: "A graphical tool which shows how much a country is willing to export for a given quantity of imports.",
        answers: [
          { text: "Trade offer curve", correct: true },
          { text: "Autarky", correct: false },
        ]
    },

    {
        question: "The ability of a country to produce a good at a lower cost per unit than any other country. This concept is not emphasized in modern trade theory due to its limitations.",
        answers: [
          { text: "Absolute advantage", correct: true },
          { text: "Terms of trade", correct: false },
        ]
    },

    {
        question: "A country that has no absolute advantage in the production of either good has no reason to trade internationally.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, //The country can gain from trade as long as it has comparative advantages.

    {
        question: "In the classical trade theory, the country as a whole is better off after trade, but consumers lose.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, //Consumers will be better off, because the country will be on a higher indifference curve.

    {
        question: "When the terms of trade of a country deteriorate, it will get less imports for the same quantity of exports.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false },
        ]
    },

    {
        question: "If with two countries and two products each country has an absolute advantage in one of the products, they also have comparative advantages for that product.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false},
        ]
    }, /*If one of the countries has absolute advantages in the production
     of both goods, we can't make definite conclusions about its comparative advantages. 
     However, when one of the countries has an absolute advantage in one of the goods and the other has 
     an absolute advantage in the other good, this means that they also have comparative advantages for 
     the respective goods.*/

    {
        question: "When countries specialize, they are capable of producing beyond their production possibility frontier.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, //After trade the countries will be able to consume beyond their production possibility frontier, but they can't produce beyond that frontier.

    {
        question: "The Hekscher-Ohlin theorem says that the countries will benefit from trade but it doesn't tell us what the direction of the trade flows will be.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, //Each country will export the good which uses more intensively in production the factor that is in relative abundance.

    {
        question: "If a country has more capital than another, then it necessarily follows that it has relative abundance in capital.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, //Not necessarily. What matters is that the capital to labour ratio is higher.

    {
        question: "In the Hekscher-Ohlin model of trade the prices of goods will equalize, but the relative prices of the factors of production in the trading countries will tend to diverge.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, //Factor prices will tend to converge, as proved in the factor price equalization theorem.

    {
        question: "A relatively capital intensive good is the good for whose production are used more units of capital than units of labour.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, /*Not necessarily. If we have the goods A and B and the production of one unit of A 
    requires capital to labour ratio 3/1, whereas the production of one unit of B requires capital
     to labour ratio 10/1, both goods need more capital than labour in production. 
     However, B is relatievly more capital intensive, as 10/1 > 3/1. */

    {
        question: "The Leontieff paradox is the finding that the United States imported labor-intensive goods when they were expected to import capital-intensive goods.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
     }, /* According to the H-O theorem, we would expect USA to export capital intensive 
     and to import labour intensive goods,
      as in USA capital is relatively abundant and labour is relatively scarce.
       There is nothing paradoxical in the country importing labour intensive goods, 
       the paradox is that Leontieff found that USA actually import capital intensive goods.*/

    {
        question: "Economies of scale are the result of decreasing returns to scale.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    },
     /*New trade theories usually assume economies of scale. Economies of scale 
     are observed when increases in production volumes lead to lower average costs
      of production. This can happen when there are increasing
       returns to scale in physical production.*/

    {
        question: "Inter-industry trade is trade in differentiated products.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, /*Inter-industry trade is trade with products from different industries.
     For example, the country exports cotton and imports automobiles. 
     Cotton is considered a homogenous product, there is no need
      that the products are differentiated.*/

    {
        question: "The theory of overlapping demand is good at explaining trade between developing and developed countries but not between developed countries themselves.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    }, /*The theory of overlapping demand is useful for explaining trade flows
     between countries at the same level of development, e.g. developed and developed. */

    {
        question: "New trade theories predict that countries can gain from trade even when they have exactly the same relative factor endowments.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false },
        ]
    }, /*Under the assumption of economies of scale and differentiated products countries can
     gain from trade even if they have exactly the same relative factor endowments.
      It is because trade makes the market size bigger and this lowers the costs of production. */

    {
        question: "Intra-industry trade can happen under perfect competition.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ]
    },
    /*Intra-industry trade, which means 
    that France will export automobiles for Germany and Germany 
    will export automobiles for France, require differentiated products. 
    Perfect competition assumes homogenous products.
*/
    

    {
        question: "If a country has comparative advantage in the production of one good, it means that:",
        answers: [
          { text: "it also has absolute advantage in the production of the same good", correct: false },
          { text: "it also has comparative advantage in the production of the other good", correct: false },
          { text: "it has comparative disadvantage in the production of the other good", correct: true },
          { text: "we can’t say for sure anything about its other advantages or disadvantages", correct: true },
        ]
    }, 

    {
        question: "In the classical trade model if in an hour Moesia can produce 30 l wine or 15 kg wool, while Thrace can produce either 20 l wine or 10 kg wool:",
        answers: [
          { text: "only Thrace will gain from trade", correct: false },
          { text: "only Moesia will gain from trade", correct: false },
          { text: "both countries will gain from trade", correct: false },
          { text: "no country will gain from trade", correct: true },
        ]
    },

    {
        question: "If NTOT for Moesia are 5/3 and for Thrace are 1/3, if ITOT are 2/3:",
        answers: [
          { text: "Moesia will gain more from trade", correct: true },
          { text: "Thrace will gain more from trade", correct: false },
          { text: "both countries gain equally from trade", correct: false },
          { text: "no country will gain from trade", correct: false },
        ]
    },

    {
        question: "The classical and neoclassical theories of trade differ in all but:",
        answers: [
          { text: "who wins and who loses from trade in each country", correct: false },
          { text: "the number of the factors of production", correct: false },
          { text: "the shape of the production possibility frontier", correct: false },
          { text: "the role of reciprocal demand in the formation of the international terms of trade (ITOT)", correct: true },
        ]
    },

    {
        question: "In the Hekscher-Ohlin theorem the differences in the opportunity costs of production are the result of:",
        answers: [
          { text: "different tecnologies of production used in the two countries", correct: false },
          { text: "differences in the relative factor endowments in the two countries", correct: true },
          { text: "different tastes", correct: false },
          { text: "all of the above are true", correct: false },
        ]
    },
    {
        question: "Trade in the Hekscher-Ohlin model leads to:",
        answers: [
          { text: "increased welfare for the country as a whole", correct: true },
          { text: "higher income for the owners of the scarce factor", correct: false },
          { text: "complete specialization", correct: false },
          { text: "none of the above is true", correct: false },
        ]
    },

    {
        question: "If Moesia is relatively more endowed with capital and specializes in the production of a relatively capital intensive good, after trade:",
        answers: [
          { text: "the income of the owners of both capital and labour used to produce the exported good will increase", correct: false },
          { text: "the income of the owners of capital will increase, regardless of the good in the production of which it is employed", correct: true },
          { text: "only the income of the owners of capital used in the production of the exported good will increase", correct: false },
          { text: "only the income of the owners of labour used in the production of the exported good will increase", correct: false },
        ]
    },

    {
        question: "According to the product life cycle theory a developing country is most likely going to export a product when it is in:",
        answers: [
          { text: "the new product phase", correct: false },
          { text: "the mature product phase", correct: true },
          { text: "the standardization phase", correct: true },
          { text: "none. a developing country will not export", correct: false },
        ]
    },

    {
        question: "The product life cycle theory assumes:",
        answers: [
          { text: "labour mobility between countries", correct: false },
          { text: "capital mobility between countries", correct: true },
          { text: "mobility of both labour and capital between countries", correct: false },
          { text: "mobility of neither labour, nor capital between countries", correct: false },
        ]
    },


    {
        question: "The production of which commodity or group of commodities will most likely be characterized by intra-industry trade?",
        answers: [
          { text: "potatoes", correct: false },
          { text: "iron", correct: false },
          { text: "automobiles", correct: true },
          { text: "intra-industry trade is equally likely to occur in all of the above", correct: false },
        ]
    },
    
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffleQuestions(questions); // Shuffle questions at the start of the quiz
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = "Ton score est " + score + " sur " + questions.length + " !";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
