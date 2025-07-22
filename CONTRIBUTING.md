<!--
SPDX-FileCopyrightText: 2025 Daniele Paletti <danielepaletti98@gmail.com>
SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Contributing

## Development Setup

1. Fork the repository and clone your fork:

   ```bash
   git clone https://github.com/dpaletti/soil-moisture-sensor.git
   cd [project-name]
   ```

2. Set up the development environment:

   ```bash
   # Install mise if you haven't already
   curl https://mise.run | sh

   # Run the setup task (this installs and configures all development tools)
   mise run setup
   ```

3. Create a new branch for your feature:

   ```bash
   git checkout -b <your_branch>
   ```

4. After each commit pre-commit hooks run. Do not disable them, they will run again in
   CI after the pull request.

## Did you find a bug?

Ensure the bug was not already reported by searching on Github under
[Issues](https://github.com/dpaletti/soil-moisture-sensor/issues). If unable to find an
open issue addressing the problem,
[open a new one](https://github.com/dpaletti/soil-moisture-sensor/issues/new). Include a
title and clear description, as much relevant information as possible, and a code sample
or an executable test case demonstrating the expected behavior.

## Did you write a patch that fixes a bug?

1. If applicable, add a unit test case to make sure the issue does not occur again.
2. Open a new Github pull request with the patch.
3. Ensure the PR description describes the problem and solution. Include the relevant
   issue number if applicable.

## Outside Contributors

1. Discuss your intended changes with the core team on Github
2. Announce that you are working or want to work on a specific issue
3. Avoid large pull requests - they are much less likely to be merged as they are harder
   to review

## Pull Requests

1. Do not commit/push directly to the main branch. Instead, create a fork and file a
   pull request.
2. When maintaining a branch, merge frequently with the main.
3. When maintaining a branch, submit pull requests to the main frequently.
4. If you are working on a bigger issue try to split it up into smaller issues.
5. Please do not open "Draft" pull requests. Rather, use issues or discussion topics to
   discuss whatever needs discussing

## Code of Conduct

This project and everyone participating is governed by a
[Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this
code. Please report unacceptable behavior to
[danielepaletti98@gmail.com](danielepaletti98@gmail.com).

## Developer Certificate of Origin (DCO)

This project uses the Developer Certificate of Origin (DCO) to ensure that contributors
have the right to submit their contributions. All commit messages must contain the
Signed-off-by line with an email address that matches the commit author.

### What is the DCO?

The DCO is a lightweight mechanism for contributors to certify that they wrote or
otherwise have the right to submit code or documentation to a project. The full text of
the DCO can be found in the [DCO](DCO) file.

### How to Sign Your Commits

If you've run `mise run setup`, your commits will automatically be signed (and gpg
signing will be turned off). Otherwise, you can manually sign commits using:

```bash
git commit -s -m "Your commit message"
```

To sign off on the last commit you made:

```bash
git commit --amend -s
```

To sign off on the last N commits:

```bash
git rebase HEAD~N --signoff
```

### DCO Check Failed?

If the DCO check fails on your PR, it means one or more of your commits are missing the
sign-off. You can fix this by:

1. Rebasing and signing your commits:

   ```bash
   git rebase -i main
   # Mark commits for edit, then for each:
   git commit --amend -s
   git rebase --continue
   ```

2. Force push your branch:

   ```bash
   git push --force-with-lease origin your-branch
   ```

## GPG Signatures

GPG signatures are disabled by `mise run setup`. GPG signatures will only be applied to
tags to ensure the integrity of releases while reducing signature usage as much as
possible.

## Attribution

This file is partially based on
[DuckDB contribution guide](https://github.com/duckdb/duckdb/blob/main/CONTRIBUTING.md)
