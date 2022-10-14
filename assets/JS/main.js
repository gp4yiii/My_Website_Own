const cover = [
    document.getElementById('cover-1'),
    document.getElementById('cover-2'),
    document.getElementById('cover-3'),
    document.getElementById('cover-4')
];
let coverPageCounter = 0;
let windowWidth = document.body.clientWidth;


// console.log(windowWidth);
if (900 <= windowWidth) {
    cover[0].style.display = "block";
    coverPageCounter++;


    const timerId = setInterval(() => {
        cover[coverPageCounter - 1].style.display = "none";

        cover[coverPageCounter].style.display = "block";

        coverPageCounter++;
        if (3 < coverPageCounter) {
            clearInterval(timerId);
        }
    }, 2000);
} else {
    cover[3].style.display = "block";

}