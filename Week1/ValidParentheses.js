var isValid = function(s) {
    // 문자열 -> 배열
    s = s.split("");
    // stack: 스택으로 사용한 배열
    var stack = [];
        for (var z of s) {
        if (z === "(" || z === "{" || z === "[") {
            stack.push(z);
        } 
        else {
            var top = stack[stack.length - 1];
            // 현재 닫는 괄호와 스택의 최상단 여는 괄호가 짝이 맞는지 확인
            // 짝이 맞으면 스택에서 pop, 아니면 false
            if (z === ")" && top === "(" || 
                z === "]" && top === "[" || 
                z === "}" && top === "{") {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    // 스택이 비어있으면(모든 괄호가 짝이 맞음) true 반환
    // 스택에 요소가 남아있으면(닫히지 않은 괄호 존재) false 반환
    return stack.length === 0;
};