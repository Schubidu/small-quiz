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

var competitors = new RandomHtmlList(document.getElementById("competitors"));
var quizBlock = document.getElementById("quiz");
var startBlock = document.getElementById("start");
var finishBlock = document.getElementById("finish");
var questions = new RandomHtmlList(document.getElementById("questions"));
var showCompetitors = true;
var state =

toggleView();

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
