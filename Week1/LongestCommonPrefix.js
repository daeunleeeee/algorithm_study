var longestCommonPrefix = function (strs) {
    // 빈 배열이 입력된 경우 빈 문자열을 반환함
    if (strs.length === 0) {
        return '';
    }

    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        // 현재 문자열이 ans로 시작하지 않는 동안 실행함
        while (strs[i].indexOf(ans) !== 0) {
            // 마지막 문자를 제외한 부분 문자열 추출
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};