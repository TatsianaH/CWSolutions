// https://www.codewars.com/kata/562e98755e9214cd2500003d/train/javascript

function yourFutureCareer(career){
    career = Math.random() * 1;
    if (career <= 0.32) {
        return 'FrontEnd Developer';
    } else if (career <= 0.65){
        return 'BackEnd Developer';
    } else {
        return 'Full-Stack Developer';
    }
}
