valid_parentheses_solution = """const isValid = function(s) {
    let stack = [];

    for (let el of s) {
        if (el === ')') {
            if (stack.pop() !== '(') return false;
        }

        else if (el === ']') {
            if (stack.pop() !== '[') return false;
        }

        else if (el === '}') {
            if (stack.pop() !== '{') return false;
        }

        else stack.push(el);
    }

    return stack.length ? false : true;
};"""

backspace_string_compare_solution = """const backspaceCompare = function(s, t) {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '#') arr1.pop();
        else arr1.push(char);
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (char === '#') arr2.pop();
        else arr2.push(char);
    }

    return arr1.join('') === arr2.join('')
};"""

daily_temperatures_solution = """const dailyTemperatures = function(temperatures) {
    let stack = [];
    let res = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        let currTemp = temperatures[i];

        while (stack.length && stack[stack.length - 1][0] < currTemp) {
            let [prevTemp, idx] = stack.pop();
            res[idx] = i - idx;
        }

        stack.push([currTemp, i]);
    }

    return res;
};"""

evalute_reverse_polish_notation_solution = """const evalRPN = function(tokens) {
    let stack = [];

    for (let el of tokens) {
        if (el === '+') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a + b);
        }
        else if (el === '*') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a * b);
        }
        else if (el === '-') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        }
        else if (el === '/') {
            let a = stack.pop();
            let b = stack.pop();
            let res = b / a;
            res = res > 0 ? Math.floor(res) : Math.ceil(res);
            stack.push(res)
        }
        else stack.push(Number(el));
    }

    return stack[0];
};"""
