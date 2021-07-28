import userSWR from 'swr'

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}

export const userFetch = () => {
    const url = "http://localhost:3000/api/user/userlist";
    const {data, error} = userSWR(url, fetcher);

    return{data, error}
}