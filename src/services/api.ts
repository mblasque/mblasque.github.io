import axios from "axios";

export type GithubResponse = {

}

class Api {
    getGithubRepos = async (): Promise<GithubResponse> => 
        axios.get('https://api.github.com/users/mblasque/repos');
}

export default new Api();