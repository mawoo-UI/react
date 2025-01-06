import React from "react";

function formatName(user) {
    return user.firstName + '' + user.lastName;
}
const user = {
    firstName : 'juyeon',
    lastName: 'han'
}
const comment = "인사말";

// title : 커서 올렸을 때 '' 안의 내용이 뜸
const el = <h1 title={comment}> hello{formatName(user)} </h1>;

const MyElement = () => {
    return el;
}

export default MyElement;