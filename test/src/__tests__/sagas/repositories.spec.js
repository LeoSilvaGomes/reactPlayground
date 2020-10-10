import { runSaga } from "redux-saga";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";
import { getRepositories } from "../../store/sagas/repositories";

const response = [
  {
    id: 300161275,
    node_id: "MDEwOlJlcG9zaXRvcnkzMDAxNjEyNzU=",
    name: "awesome-github-profile-readme",
    full_name: "LeoSilvaGomes/awesome-github-profile-readme",
    private: false,
    owner: {
      login: "LeoSilvaGomes",
      id: 61520601,
      node_id: "MDQ6VXNlcjYxNTIwNjAx",
      avatar_url: "https://avatars0.githubusercontent.com/u/61520601?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LeoSilvaGomes",
      html_url: "https://github.com/LeoSilvaGomes",
      followers_url: "https://api.github.com/users/LeoSilvaGomes/followers",
      following_url:
        "https://api.github.com/users/LeoSilvaGomes/following{/other_user}",
      gists_url: "https://api.github.com/users/LeoSilvaGomes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LeoSilvaGomes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/LeoSilvaGomes/subscriptions",
      organizations_url: "https://api.github.com/users/LeoSilvaGomes/orgs",
      repos_url: "https://api.github.com/users/LeoSilvaGomes/repos",
      events_url: "https://api.github.com/users/LeoSilvaGomes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LeoSilvaGomes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/LeoSilvaGomes/awesome-github-profile-readme",
    description: "😎 A curated list of awesome Github Profile READMEs 📝",
    fork: true,
    url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme",
    forks_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/forks",
    keys_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/teams",
    hooks_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/hooks",
    issue_events_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/events",
    assignees_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/tags",
    blobs_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/languages",
    stargazers_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/stargazers",
    contributors_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/contributors",
    subscribers_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/subscribers",
    subscription_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/subscription",
    commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/merges",
    archive_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/downloads",
    issues_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/labels{/name}",
    releases_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/LeoSilvaGomes/awesome-github-profile-readme/deployments",
    created_at: "2020-10-01T05:49:11Z",
    updated_at: "2020-10-01T05:49:13Z",
    pushed_at: "2020-10-01T05:56:42Z",
    git_url: "git://github.com/LeoSilvaGomes/awesome-github-profile-readme.git",
    ssh_url: "git@github.com:LeoSilvaGomes/awesome-github-profile-readme.git",
    clone_url:
      "https://github.com/LeoSilvaGomes/awesome-github-profile-readme.git",
    svn_url: "https://github.com/LeoSilvaGomes/awesome-github-profile-readme",
    homepage: "https://zzetao.github.io/awesome-github-profile/",
    size: 12514,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "cc0-1.0",
      name: "Creative Commons Zero v1.0 Universal",
      spdx_id: "CC0-1.0",
      url: "https://api.github.com/licenses/cc0-1.0",
      node_id: "MDc6TGljZW5zZTY=",
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 301598669,
    node_id: "MDEwOlJlcG9zaXRvcnkzMDE1OTg2Njk=",
    name: "Fac",
    full_name: "LeoSilvaGomes/Fac",
    private: false,
    owner: {
      login: "LeoSilvaGomes",
      id: 61520601,
      node_id: "MDQ6VXNlcjYxNTIwNjAx",
      avatar_url: "https://avatars0.githubusercontent.com/u/61520601?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LeoSilvaGomes",
      html_url: "https://github.com/LeoSilvaGomes",
      followers_url: "https://api.github.com/users/LeoSilvaGomes/followers",
      following_url:
        "https://api.github.com/users/LeoSilvaGomes/following{/other_user}",
      gists_url: "https://api.github.com/users/LeoSilvaGomes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LeoSilvaGomes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/LeoSilvaGomes/subscriptions",
      organizations_url: "https://api.github.com/users/LeoSilvaGomes/orgs",
      repos_url: "https://api.github.com/users/LeoSilvaGomes/repos",
      events_url: "https://api.github.com/users/LeoSilvaGomes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LeoSilvaGomes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/LeoSilvaGomes/Fac",
    description:
      "Conteúdo relacionado a matéria fundamentos de arquitetura de software (FAC) dado pela Universidade de Brasília (UnB)",
    fork: true,
    url: "https://api.github.com/repos/LeoSilvaGomes/Fac",
    forks_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/forks",
    keys_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/teams",
    hooks_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/hooks",
    issue_events_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/issues/events{/number}",
    events_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/events",
    assignees_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/branches{/branch}",
    tags_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/tags",
    blobs_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/statuses/{sha}",
    languages_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/languages",
    stargazers_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/stargazers",
    contributors_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/contributors",
    subscribers_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/subscribers",
    subscription_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/subscription",
    commits_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/merges",
    archive_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/downloads",
    issues_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/issues{/number}",
    pulls_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/LeoSilvaGomes/Fac/labels{/name}",
    releases_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/LeoSilvaGomes/Fac/deployments",
    created_at: "2020-10-06T02:59:41Z",
    updated_at: "2020-10-06T02:59:46Z",
    pushed_at: "2020-03-13T12:32:43Z",
    git_url: "git://github.com/LeoSilvaGomes/Fac.git",
    ssh_url: "git@github.com:LeoSilvaGomes/Fac.git",
    clone_url: "https://github.com/LeoSilvaGomes/Fac.git",
    svn_url: "https://github.com/LeoSilvaGomes/Fac",
    homepage: null,
    size: 102,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 301599032,
    node_id: "MDEwOlJlcG9zaXRvcnkzMDE1OTkwMzI=",
    name: "goPlayground",
    full_name: "LeoSilvaGomes/goPlayground",
    private: false,
    owner: {
      login: "LeoSilvaGomes",
      id: 61520601,
      node_id: "MDQ6VXNlcjYxNTIwNjAx",
      avatar_url: "https://avatars0.githubusercontent.com/u/61520601?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LeoSilvaGomes",
      html_url: "https://github.com/LeoSilvaGomes",
      followers_url: "https://api.github.com/users/LeoSilvaGomes/followers",
      following_url:
        "https://api.github.com/users/LeoSilvaGomes/following{/other_user}",
      gists_url: "https://api.github.com/users/LeoSilvaGomes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LeoSilvaGomes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/LeoSilvaGomes/subscriptions",
      organizations_url: "https://api.github.com/users/LeoSilvaGomes/orgs",
      repos_url: "https://api.github.com/users/LeoSilvaGomes/repos",
      events_url: "https://api.github.com/users/LeoSilvaGomes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LeoSilvaGomes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/LeoSilvaGomes/goPlayground",
    description:
      "Esse repositório tem a intenção de ser um compilado de projetos criados no decorrer da minha aprendizagem de Go.",
    fork: false,
    url: "https://api.github.com/repos/LeoSilvaGomes/goPlayground",
    forks_url: "https://api.github.com/repos/LeoSilvaGomes/goPlayground/forks",
    keys_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/LeoSilvaGomes/goPlayground/teams",
    hooks_url: "https://api.github.com/repos/LeoSilvaGomes/goPlayground/hooks",
    issue_events_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/events",
    assignees_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/branches{/branch}",
    tags_url: "https://api.github.com/repos/LeoSilvaGomes/goPlayground/tags",
    blobs_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/languages",
    stargazers_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/stargazers",
    contributors_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/contributors",
    subscribers_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/subscribers",
    subscription_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/subscription",
    commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/merges",
    archive_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/downloads",
    issues_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/labels{/name}",
    releases_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/LeoSilvaGomes/goPlayground/deployments",
    created_at: "2020-10-06T03:01:39Z",
    updated_at: "2020-10-08T03:37:42Z",
    pushed_at: "2020-10-08T03:37:39Z",
    git_url: "git://github.com/LeoSilvaGomes/goPlayground.git",
    ssh_url: "git@github.com:LeoSilvaGomes/goPlayground.git",
    clone_url: "https://github.com/LeoSilvaGomes/goPlayground.git",
    svn_url: "https://github.com/LeoSilvaGomes/goPlayground",
    homepage: null,
    size: 1023,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Go",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 289051338,
    node_id: "MDEwOlJlcG9zaXRvcnkyODkwNTEzMzg=",
    name: "jupyterPlayground",
    full_name: "LeoSilvaGomes/jupyterPlayground",
    private: false,
    owner: {
      login: "LeoSilvaGomes",
      id: 61520601,
      node_id: "MDQ6VXNlcjYxNTIwNjAx",
      avatar_url: "https://avatars0.githubusercontent.com/u/61520601?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LeoSilvaGomes",
      html_url: "https://github.com/LeoSilvaGomes",
      followers_url: "https://api.github.com/users/LeoSilvaGomes/followers",
      following_url:
        "https://api.github.com/users/LeoSilvaGomes/following{/other_user}",
      gists_url: "https://api.github.com/users/LeoSilvaGomes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LeoSilvaGomes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/LeoSilvaGomes/subscriptions",
      organizations_url: "https://api.github.com/users/LeoSilvaGomes/orgs",
      repos_url: "https://api.github.com/users/LeoSilvaGomes/repos",
      events_url: "https://api.github.com/users/LeoSilvaGomes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LeoSilvaGomes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/LeoSilvaGomes/jupyterPlayground",
    description:
      "Esse repositório tem a intenção de ser um compilado de projetos criados no decorrer da minha aprendizagem de React.",
    fork: false,
    url: "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground",
    forks_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/forks",
    keys_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/teams",
    hooks_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/hooks",
    issue_events_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/events",
    assignees_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/tags",
    blobs_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/languages",
    stargazers_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/stargazers",
    contributors_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/contributors",
    subscribers_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/subscribers",
    subscription_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/subscription",
    commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/merges",
    archive_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/downloads",
    issues_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/labels{/name}",
    releases_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/LeoSilvaGomes/jupyterPlayground/deployments",
    created_at: "2020-08-20T16:09:41Z",
    updated_at: "2020-08-20T16:38:23Z",
    pushed_at: "2020-08-20T16:38:21Z",
    git_url: "git://github.com/LeoSilvaGomes/jupyterPlayground.git",
    ssh_url: "git@github.com:LeoSilvaGomes/jupyterPlayground.git",
    clone_url: "https://github.com/LeoSilvaGomes/jupyterPlayground.git",
    svn_url: "https://github.com/LeoSilvaGomes/jupyterPlayground",
    homepage: "",
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Jupyter Notebook",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 300136997,
    node_id: "MDEwOlJlcG9zaXRvcnkzMDAxMzY5OTc=",
    name: "LeoSilvaGomes",
    full_name: "LeoSilvaGomes/LeoSilvaGomes",
    private: false,
    owner: {
      login: "LeoSilvaGomes",
      id: 61520601,
      node_id: "MDQ6VXNlcjYxNTIwNjAx",
      avatar_url: "https://avatars0.githubusercontent.com/u/61520601?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LeoSilvaGomes",
      html_url: "https://github.com/LeoSilvaGomes",
      followers_url: "https://api.github.com/users/LeoSilvaGomes/followers",
      following_url:
        "https://api.github.com/users/LeoSilvaGomes/following{/other_user}",
      gists_url: "https://api.github.com/users/LeoSilvaGomes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LeoSilvaGomes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/LeoSilvaGomes/subscriptions",
      organizations_url: "https://api.github.com/users/LeoSilvaGomes/orgs",
      repos_url: "https://api.github.com/users/LeoSilvaGomes/repos",
      events_url: "https://api.github.com/users/LeoSilvaGomes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LeoSilvaGomes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/LeoSilvaGomes/LeoSilvaGomes",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes",
    forks_url: "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/forks",
    keys_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/teams",
    hooks_url: "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/hooks",
    issue_events_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/events",
    assignees_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/branches{/branch}",
    tags_url: "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/tags",
    blobs_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/languages",
    stargazers_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/stargazers",
    contributors_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/contributors",
    subscribers_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/subscribers",
    subscription_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/subscription",
    commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/merges",
    archive_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/downloads",
    issues_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/labels{/name}",
    releases_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/LeoSilvaGomes/LeoSilvaGomes/deployments",
    created_at: "2020-10-01T04:06:11Z",
    updated_at: "2020-10-01T05:35:48Z",
    pushed_at: "2020-10-01T05:35:46Z",
    git_url: "git://github.com/LeoSilvaGomes/LeoSilvaGomes.git",
    ssh_url: "git@github.com:LeoSilvaGomes/LeoSilvaGomes.git",
    clone_url: "https://github.com/LeoSilvaGomes/LeoSilvaGomes.git",
    svn_url: "https://github.com/LeoSilvaGomes/LeoSilvaGomes",
    homepage: null,
    size: 6,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 259804126,
    node_id: "MDEwOlJlcG9zaXRvcnkyNTk4MDQxMjY=",
    name: "pythonPlayground",
    full_name: "LeoSilvaGomes/pythonPlayground",
    private: false,
    owner: {
      login: "LeoSilvaGomes",
      id: 61520601,
      node_id: "MDQ6VXNlcjYxNTIwNjAx",
      avatar_url: "https://avatars0.githubusercontent.com/u/61520601?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LeoSilvaGomes",
      html_url: "https://github.com/LeoSilvaGomes",
      followers_url: "https://api.github.com/users/LeoSilvaGomes/followers",
      following_url:
        "https://api.github.com/users/LeoSilvaGomes/following{/other_user}",
      gists_url: "https://api.github.com/users/LeoSilvaGomes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LeoSilvaGomes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/LeoSilvaGomes/subscriptions",
      organizations_url: "https://api.github.com/users/LeoSilvaGomes/orgs",
      repos_url: "https://api.github.com/users/LeoSilvaGomes/repos",
      events_url: "https://api.github.com/users/LeoSilvaGomes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LeoSilvaGomes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/LeoSilvaGomes/pythonPlayground",
    description:
      "Esse repositório tem a intenção de ser um compilado de projetos criados no decorrer da minha aprendizagem de Python.",
    fork: false,
    url: "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground",
    forks_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/forks",
    keys_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/teams",
    hooks_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/hooks",
    issue_events_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/events",
    assignees_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/tags",
    blobs_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/languages",
    stargazers_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/stargazers",
    contributors_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/contributors",
    subscribers_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/subscribers",
    subscription_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/subscription",
    commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/merges",
    archive_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/downloads",
    issues_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/labels{/name}",
    releases_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/LeoSilvaGomes/pythonPlayground/deployments",
    created_at: "2020-04-29T02:27:23Z",
    updated_at: "2020-04-29T02:32:45Z",
    pushed_at: "2020-04-29T02:32:41Z",
    git_url: "git://github.com/LeoSilvaGomes/pythonPlayground.git",
    ssh_url: "git@github.com:LeoSilvaGomes/pythonPlayground.git",
    clone_url: "https://github.com/LeoSilvaGomes/pythonPlayground.git",
    svn_url: "https://github.com/LeoSilvaGomes/pythonPlayground",
    homepage: null,
    size: 6695,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 258334668,
    node_id: "MDEwOlJlcG9zaXRvcnkyNTgzMzQ2Njg=",
    name: "reactPlayground",
    full_name: "LeoSilvaGomes/reactPlayground",
    private: false,
    owner: {
      login: "LeoSilvaGomes",
      id: 61520601,
      node_id: "MDQ6VXNlcjYxNTIwNjAx",
      avatar_url: "https://avatars0.githubusercontent.com/u/61520601?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LeoSilvaGomes",
      html_url: "https://github.com/LeoSilvaGomes",
      followers_url: "https://api.github.com/users/LeoSilvaGomes/followers",
      following_url:
        "https://api.github.com/users/LeoSilvaGomes/following{/other_user}",
      gists_url: "https://api.github.com/users/LeoSilvaGomes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LeoSilvaGomes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/LeoSilvaGomes/subscriptions",
      organizations_url: "https://api.github.com/users/LeoSilvaGomes/orgs",
      repos_url: "https://api.github.com/users/LeoSilvaGomes/repos",
      events_url: "https://api.github.com/users/LeoSilvaGomes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LeoSilvaGomes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/LeoSilvaGomes/reactPlayground",
    description:
      "Esse repositório tem a intenção de ser um compilado de projetos criados no decorrer da minha aprendizagem de React.",
    fork: false,
    url: "https://api.github.com/repos/LeoSilvaGomes/reactPlayground",
    forks_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/forks",
    keys_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/teams",
    hooks_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/hooks",
    issue_events_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/events",
    assignees_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/branches{/branch}",
    tags_url: "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/tags",
    blobs_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/languages",
    stargazers_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/stargazers",
    contributors_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/contributors",
    subscribers_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/subscribers",
    subscription_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/subscription",
    commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/merges",
    archive_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/downloads",
    issues_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/labels{/name}",
    releases_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/LeoSilvaGomes/reactPlayground/deployments",
    created_at: "2020-04-23T21:26:53Z",
    updated_at: "2020-10-09T20:11:25Z",
    pushed_at: "2020-10-09T20:11:23Z",
    git_url: "git://github.com/LeoSilvaGomes/reactPlayground.git",
    ssh_url: "git@github.com:LeoSilvaGomes/reactPlayground.git",
    clone_url: "https://github.com/LeoSilvaGomes/reactPlayground.git",
    svn_url: "https://github.com/LeoSilvaGomes/reactPlayground",
    homepage: null,
    size: 41731,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 300286994,
    node_id: "MDEwOlJlcG9zaXRvcnkzMDAyODY5OTQ=",
    name: "Trabalho_1_ED1",
    full_name: "LeoSilvaGomes/Trabalho_1_ED1",
    private: false,
    owner: {
      login: "LeoSilvaGomes",
      id: 61520601,
      node_id: "MDQ6VXNlcjYxNTIwNjAx",
      avatar_url: "https://avatars0.githubusercontent.com/u/61520601?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LeoSilvaGomes",
      html_url: "https://github.com/LeoSilvaGomes",
      followers_url: "https://api.github.com/users/LeoSilvaGomes/followers",
      following_url:
        "https://api.github.com/users/LeoSilvaGomes/following{/other_user}",
      gists_url: "https://api.github.com/users/LeoSilvaGomes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LeoSilvaGomes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/LeoSilvaGomes/subscriptions",
      organizations_url: "https://api.github.com/users/LeoSilvaGomes/orgs",
      repos_url: "https://api.github.com/users/LeoSilvaGomes/repos",
      events_url: "https://api.github.com/users/LeoSilvaGomes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LeoSilvaGomes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/LeoSilvaGomes/Trabalho_1_ED1",
    description:
      "Repositório para o versionamento do trabalho 1 da disciplina de Estrutura de Dados 1 (FGA)",
    fork: true,
    url: "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1",
    forks_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/forks",
    keys_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/teams",
    hooks_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/hooks",
    issue_events_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/events",
    assignees_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/branches{/branch}",
    tags_url: "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/tags",
    blobs_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/languages",
    stargazers_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/stargazers",
    contributors_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/contributors",
    subscribers_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/subscribers",
    subscription_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/subscription",
    commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/merges",
    archive_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/downloads",
    issues_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/LeoSilvaGomes/Trabalho_1_ED1/deployments",
    created_at: "2020-10-01T13:20:36Z",
    updated_at: "2020-10-01T13:20:39Z",
    pushed_at: "2019-10-31T17:49:33Z",
    git_url: "git://github.com/LeoSilvaGomes/Trabalho_1_ED1.git",
    ssh_url: "git@github.com:LeoSilvaGomes/Trabalho_1_ED1.git",
    clone_url: "https://github.com/LeoSilvaGomes/Trabalho_1_ED1.git",
    svn_url: "https://github.com/LeoSilvaGomes/Trabalho_1_ED1",
    homepage: null,
    size: 19,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
];

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => {
          dispatched.push(action);
        },
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(RepositoriesActions.getSuccess(response));
  });
});
