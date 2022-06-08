import * as v from "./variables.js";

// get users
export async function getuser(user) {
  const response = await fetch(v.apiurl + user);
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    errorMessage("User not found");
  } else {
    displaydata(data);
    getrepos(user);
  }
}

// get repos
async function getrepos(user) {
  const response = await fetch(v.apiurl + user + "/repos");
  const data = await response.json();
  console.log(data);
  displayrepo(data);
}
//display repo
function displayrepo(repo) {
  let repo_data = repo.map((repo) => {
    return `
    <span class="repo border rounded border-info p-3">
    <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
    <p>
      <strong>Stars : ${repo.starazers_count} |</strong>
      <strong>watchers : ${repo.watchers_count}|</strong>
      <strong>Forks : ${repo.forks_count}</strong>
    </p>
  </span>
    `;
  });
  v.repos.innerHTML = repo_data.slice(0, 8).join("");
  document.querySelector(".hide").style.display = "block";
}

//error message function
export function errorMessage(msg) {
  v.profile.innerHTML = "";
  return (v.repos.innerHTML = `
  <p class="alert alert-danger">
  ${msg}
</p>
  `);
}

function displaydata(user) {
  const html = `
  <img
  src="${user.avatar_url}"
  alt="${user.name}"
  class="img-thumbnail rounded-circle"
/>
<h2>Name :${user.name}</h2>
<p> Login :${user.login}</p>
<div class="d-grid">
  <a href="https://github.com/${user.login}" target = "_blank"class="btn btn-secondary">view profile</a>
</div>
<p class="pt-2">
  <span>Followers :${user.followers}</span>
  <span> Following : ${user.following}</span>
</p>
<p>Public repositories :${user.public_repos}</p>
<p><i class="fas fa-marker-alt"></i>Location : ${user.location}</p>
 `;
  v.profile.innerHTML = html;
}
