export const getKeyCode = (char) => {
    const keyCode = char.charCodeAt(0)
    if (keyCode > 90) { // 65 key code for both 'a' and 'A'
        return keyCode - 32
    }
    return keyCode
}