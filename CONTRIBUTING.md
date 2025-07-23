<!--
SPDX-FileCopyrightText: 2025 <github.com/dpaletti/soil-moisture-sensor> contributors

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Contributing

Hi, glad you are here. First, we setup the development environment so you are aligned
with all other contributors.

## Development Setup

Development environment reproducibility is guaranteed by [mise](https://mise.jdx.dev/).

```bash
# Fork the repo (from github GUI) then clone
git clone https://github.com/<your_username>/soil_moisture-sensor.git

# Keep it updated with upstream
git remote add upstream https://github.com/dpaletti/soil-moisture-sensor.git
git fetch upstream

# Create your branch
git checkout -b <branch_name>

# Install mise if you haven't already
curl https://mise.run | sh

# Setup dev environment
mise setup
```

Once you are done with this you will have installed all the tools specified in
`mise.toml` (which you will find in the root directory).

### Available tools

[Pre-commit](https://pre-commit.com/) manages everything that runs when you commit
locally and will run again in CI, that is when you open your pull-request:

- adds 'Signed-off-by: \<git user name\> \<git email\>' at the end of each commit
  message (if not already there) for developer certificate of origin (DCO) compliance.
  This is a legal tool to ensure that third parties cannot claim ownership over
  contributors work (see [DCO file](DCO) for more legal details).
- lints and formats markdown files:
  - [prettier](https://prettier.io/): formats markdown (and many other) files
  - [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2): lints markdown
    for style and syntax errors
  - [vale](https://vale.sh/): checks grammar and prose, if some word does not get
    recognised add it to
    [the vocabulary](.vale/styles/config/vocabularies/custom/accept.txt)
- runs [reuse tool](https://reuse.software/) to check for reuse compliance. This allows
  automated license compliance. When you create new files you need to add a copyright
  and license notice on top.

  ```bash
  reuse annotate --copyright "<github.com/dpaletti/soil-moisture-sensor> contributors" --license "one among CERN-OHL-S-2.0 or GPLv3-or-later or CC-BY-SA-4.0" file_name_or_pattern

  # This is an example of how has been done on existing files
  # reuse annotate --copyright "<github.com/dpaletti/soil-moisture-sensor> contributors" --license "CC-BY-SA-4.0" README.md
  # This will also add the correct year before the notice
  # This command works also on patterns for bulk annotation
  ```

  If the file is non-commentable (e.g. JSON or binary) please add an annotations section
  to [REUSE.toml](REUSE.toml).

## Did you find a bug?

Ensure the bug was not already reported among the
[Issues](https://github.com/dpaletti/soil-moisture-sensor/issues). If you are unable to
find an open issue addressing the problem, open a new one. Be sure to include a title
and clear description, as much relevant information as possible, and a code sample or an
executable test case demonstrating the expected behavior that is not occurring.

## Did you write a patch that fixes a bug?

Great! If possible, add a unit test case to make sure the issue does not occur again.
Open a new Github pull request with the patch. Ensure the PR describes both the problem
and the solution. Include the relevant issue number if applicable.

## Do you want to add a new feature?

- announce that you are working or want to work on a specific issue
- avoid large pull requests, they are hard to review
