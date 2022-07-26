import axios from "axios";

const getData = async (userId) => {

    const { data: Users } = await axios(" https://jsonplaceholder.typicode.com/users/" + Number(userId));

    const { data: Post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + Number(userId));

    console.log("Users: ", Users)
    console.log("Posts: ", Post[userId - 1])

}
export default getData;
