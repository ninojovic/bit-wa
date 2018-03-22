import storageService from './../services/StorageService'

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

const normalizeUser = (user) => {
    return user.getFullName().toLowerCase()
}

const userNameContains = (user, valueToFind) => {
    const userFullName = normalizeUser(user);
    const value = valueToFind.toLowerCase();
    
    return userFullName.includes(value);
}

export const searchUsersByName = (users, valueToSearch) => {
    return users.filter(user => userNameContains(user, valueToSearch))
}

export const minsFromLastVisit = () => {
    const lastVisit = storageService.getLastVisit();
    const currentTime = Date.now();
    const timeFromLastVisit = (currentTime - lastVisit)/1000/60

    return timeFromLastVisit
}

export const timeFromLastVisit = (lastVisit) => {
    const time = lastVisit;

    switch(true) {
      case ((time > 1) && (time < 20)):
          return "1 minute ago"
          break;
      case ((time > 20) && (time < 60)):
          return "20 minute ago"
          break;
      case ((time > 60) && (time < 2880)):
          return "over an hour ago"
          break;
      case ((time > 2880) && (time < 10080)):
          return "two days ago"
          break;
      case ((time > 10080) && (time < 43200)):
          return "over a week ago"
          break;
      case ((time > 43200) && (time < 45000)):
          return "one month ago"
          break;
      case (time > 45000):
          return "over a month ago"
          break;
      default:
          return "error"
    }
}