export const hideEmail = email => {
    const [username, provider] = email.split("@");
    const usernameHalf = username.slice(0, Math.floor(username.length / 2));
    return `${usernameHalf}...@${provider}`;
}

export const formatDate = date => {
    const dateObj = new Date(date);
    return `${dateObj.getDate()}.${dateObj.getMonth() - 1}.${dateObj.getFullYear()}.`;
}

export const firstLetterToUpper = (string) => {
    let stringArr = string.split("");
    stringArr[0] = stringArr[0].toUpperCase();

    return stringArr.join("");
}