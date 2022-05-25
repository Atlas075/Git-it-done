var issueContainerEl = document.querySelector("#issues-container");
var limitWarningEl = document.querySelector("#limit-warning");


var displayWarning = function(repo)
{
    limitWarningEl.textContent = "To see more than 30 issues, visit"
    var linkEl = document.createElement("a");
    linkEl.textContent = "See More Issues on GitHub.com";
    linkEl.setAttribute("href", "https://github.com/" + repo + "/issues");
    linkEl.setAttribute("target", "_blank");
  
    // append to warning container
    limitWarningEl.appendChild(linkEl);
    
}


var getRepoIssues = function (repo)
{
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    console,console.log(repo);
    
    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
            displayIssues()
          });
        }
        if (response.headers.get(link))
        {
            displayWarning(repo)
        }
        else {
          alert("There was a problem with your request!");
        }
      });
};


var displayIssues = function(issues)
{
    if (issues.length === 0)
    {
        issueContainerEl.textContent = "This repo has no open issues!";
        return
    }
    for (i = 0; i < issues.length; i++)
    {
    var issuesEl = document.createElement("a")
    issuesEl.classList = "lsit-itme flex-row justify-space-between align-center"
    issuesEl.setAttribute("href", issues[i].html_url)
    issuesEl.setAttribute("target", "_blank")

    var titleEl = document.createElement("span")
    titleEl.textContent = issues[i].titleEl

    //stick to parent
    issuesEl.appendChild(titleEl)
    
    var typeEl = document.createElement("span")

    if (issues[i].pull_request)
    {
        typeEl.textContent = "(Pull Request)"
        
    }
    else
    {
       typeEl.textContent = "(issue)" 
    }

    issuesEl.appendChild(typeEl)

    issueContainerEl.appendChild(issueEl);
    }
}

getRepoIssues("facebook/react")