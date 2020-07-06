const listRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then(res => res.json())
    .catch(error => console.error(error));
    // fetch api is promise based. executes then resolves to .then
    // async await unwraps a promise 

  const markup = repos
    .map(
      repo => `
        <li>
          <a href="${repo.html_url}">${repo.name}</a>
          (⭐${repo.stargazers_count})
        </li>
      `
    )
    .join('');

    const content = document.getElementById('content');

    content.innerHTML = `<ul>${markup}</ul>`;
};

listRepos('cramos711');