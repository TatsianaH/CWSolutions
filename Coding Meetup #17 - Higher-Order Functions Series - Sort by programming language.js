// https://www.codewars.com/kata/583ea278c68d96a5fd000abd/train/javascript

function sortByLanguage(list) {
    list.sort((a, b) => {
        if (a.language < b.language) {
            return -1;
        }
        if (a.language > b.language) {
            return 1;
        }
        if (a.language === b.language) {

            if (a.firstName < b.firstName) {
                return -1;
            }
            if (a.firstName > b.firstName) {
                return 1;
            }
            return 0;
        }
    });
    return list;
}