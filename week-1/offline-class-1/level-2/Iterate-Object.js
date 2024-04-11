function iterateObj(obj) {
    for (let key in obj) {
        console.log(key, obj[key]);
    }

    Object.keys(obj).forEach(key => console.log(key, obj[key]));
}
iterateObj({"name": "rishabh", age: 21})