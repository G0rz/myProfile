import axios from "axios";

export const getData = async (setGitProfile) => {
    let url = `https://api.github.com/users/g0rz`;
    await axios.get(url)
        .then(response => {
            return setGitProfile(response.data);
        })
        .catch(error => {
            return console.log(error)
        }).finally(function () {
            // siempre sera executado
        });
}

export const getRepos = async (setGitProfile) => {
    let url = `https://api.github.com/users/g0rz/repos`;
    await axios.get(url)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        }).finally(function () {
            // siempre sera executado
        });
}