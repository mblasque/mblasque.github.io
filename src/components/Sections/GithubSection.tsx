import api from "../../services/api";

const GithubSection = () => {
  const getRepos = async () => {
    await api.getGithubRepos();
  };

  getRepos();

  return <div className="box"></div>;
};

export default GithubSection;
