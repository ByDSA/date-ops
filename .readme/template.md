<% const author = JSON.parse(include("../package.json")).author;
  const authorEmail = author?.email;
  const authorNPMUsername = author?.npmjs;
-%>
# <%= projectName %>
[![NPM version](http://img.shields.io/npm/v/<%= projectName %>.svg)](https://www.npmjs.com/package/<%= projectName %>)
[![Generic badge](https://img.shields.io/badge/GitHub-<%= projectName.replace("-", "--") %>-blue.svg?logo=github)](https://github.com/<%= authorGithubUsername %>/<%= projectName %>)
[![CI](https://github.com/<%= authorGithubUsername %>/<%= projectName %>/actions/workflows/ci.yml/badge.svg)](https://github.com/<%= authorGithubUsername %>/<%= projectName %>/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/<%= authorGithubUsername %>/<%= projectName %>/branch/main/graph/badge.svg?token=RIJ2K00E5J)](https://codecov.io/gh/<%= authorGithubUsername %>/<%= projectName %>)

## Overview
<% if (projectDescription) { -%>
> <%= projectDescription %>
<% } -%>

<%- include("overview.md") %>
<% if (authorGithubUsername) { -%>

Read [docs](https://github.com/<%= authorGithubUsername %>/<%= projectName %>/wiki).
<% } -%>

## Install
npm:
```sh
npm install <%= projectName %>
```
Yarn:

```sh
yarn add <%= projectName %>
```
## Usage
<%- include("usage.md") %>
<% if (authorName || authorTwitterUsername || authorGithubUsername) { -%>
## Author
<% if (authorName) { %>
👤 **<%= authorName %>**
<% } %>
<% if (authorWebsite) { -%>
* Website: <%= authorWebsite %>
<% } -%>
<% if (authorEmail) { -%>
* Email: <%= authorEmail %>
<% } -%>
<% if (authorTwitterUsername) { -%>
* Twitter: [@<%= authorTwitterUsername %>](https://twitter.com/<%= authorTwitterUsername %>)
<% } -%>
<% if (authorGithubUsername) { -%>
* GitHub: [@<%= authorGithubUsername %>](https://github.com/<%= authorGithubUsername %>)
<% } -%>
<% if (authorNPMUsername) { -%>
* NPM: [@<%= authorNPMUsername %>](https://www.npmjs.com/~<%= authorNPMUsername %>)
<% } -%>
<% if (authorLinkedInUsername) { -%>
* LinkedIn: [@<%= authorLinkedInUsername %>](https://linkedin.com/in/<%= authorLinkedInUsername %>)
<% } -%>
<% } -%>
<% if (licenseName && licenseUrl) { -%>
---
<% if (authorName && authorGithubUsername) { -%>
Copyright © <%= currentYear %> [<%= authorName %>](https://github.com/<%= authorGithubUsername %>)<%= authorEmail ? ` \<${authorEmail}\>` : "" %>.<br />
<% } -%>
This project is [<%= licenseName %>](<%= licenseUrl %>) licensed.
<% } -%>

