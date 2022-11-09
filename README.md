# Git Worktree PR

## Description

Easy GitHub Pull Requests as worktree. Creating worktree and fetching the pull request in one single command.

## Usage

```sh
> npx worktreepr pull-request-number
```

For example `npx worktreepr 45`

> Pull request number can be found in a Pull Request url or title. Check screenshot

<img width="400" alt="Screenshot 2022-11-09 at 17 09 24" src="https://user-images.githubusercontent.com/17549662/200883191-b08d536c-5452-4c8e-a4f3-b5ab1839367c.png">

## Options

- Set worktree name (optional): `npx worktree pull-request-number worktree-name`, for example `npx worktree 32 jcger/fix-tests`

## Preconditions

- Your repo must be ready to use [worktrees](https://git-scm.com/docs/git-worktree)
- https://cli.github.com/ must be installed
