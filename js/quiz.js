function toggleFullScreen() {
    if (!document.mozFullScreen && !document.webkitFullScreen) {
        if (quizBlock.mozRequestFullScreen) {
            quizBlock.mozRequestFullScreen();
        } else {
            quizBlock.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        return true;
    } else {
        if (quizBlock.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else {
            document.webkitCancelFullScreen();
        }
        return false;
    }
}

function toggleView() {
    startBlock.hide();
    if (!isFinshed) {
        if (showCompetitors) {
            questions.getRoot().hide();
            competitors.showNext();
            competitors.getRoot().show();
            showCompetitors = false;
        } else {
            competitors.getRoot().hide();
            questions.showNext();
            questions.getRoot().show();
            showCompetitors = true;
        }
    }
}

var competitors = RandomHtmlList.init(document.getElementById("competitors"));
var quizBlock = document.getElementById("quiz");
var startBlock = new RootElement(document.getElementById("start"));
var finishBlock = new RootElement(document.getElementById("finish"));
var questions = RandomHtmlList.init(document.getElementById("questions"));
var showCompetitors = true;
var isFinshed = false;

startBlock.show();

competitors.onFinish = function () {
//    console.log('competitors finished');
};

questions.onFinish = function () {
    console.log('questions finished');
    questions.getRoot().hide();
    competitors.getRoot().hide();
    finishBlock.show();
    isFinshed = true;
    console.log('questions finished 2');
};

//toggleView();

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        toggleFullScreen();
    }
    if (e.keyCode == 32) {
        toggleView();
    }
}, false);

document.addEventListener("click", function (e) {
    toggleView();
}, false);

document.addEventListener("touchstart", function (e) {
    toggleView();
}, false);
