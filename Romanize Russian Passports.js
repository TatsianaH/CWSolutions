// https://www.codewars.com/kata/5a69d609e626c5708d0000c0/train/javascript

function romanize(c) {
    c = c.toLowerCase();
    const alph = {
        а: 'a', б: 'b', в: 'v', г: 'g', д: 'd' , е: 'e', ё: 'e', ж: 'zh',з: 'z',
        и: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's',
        т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch', ъ: 'ie',
        ы: 'y', ь: '', э: 'e', ю: 'iu', я: 'ia', ' ': ' ',
    };
    let ans = '';
    for(let i = 0; i < c.length; i++){
        ans += alph[c[i]];
    }
    ans = ans.split('');
    for(let i = 0; i < ans.length; i++){
        ans[0] = ans[0].toUpperCase();
        if(ans[i] === ' ') ans[i + 1] = ans[i + 1].toUpperCase();
    }
    return ans.join('');
}