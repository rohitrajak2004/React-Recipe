# Branch Protection Rules Documentation

This document describes the branch protection rules configured for the `main` branch of the React-Recipe repository.

## Overview

Branch protection rules help maintain code quality and prevent unauthorized or accidental changes to important branches. The `main` branch has been configured with the following protection rules.

## Configuration File

The branch protection rules are defined in `.github/settings.yml`. This file can be used with the [GitHub Settings App (Probot Settings)](https://github.com/probot/settings) to automatically apply these settings to the repository.

## Protection Rules for `main` Branch

### 1. Require Pull Request Before Merging ✅

- **Setting**: `required_pull_request_reviews` is enabled
- **Description**: All changes to the `main` branch must be made through pull requests. Direct commits to `main` are not allowed.
- **Benefit**: Ensures all code changes are reviewed before being merged into the main branch.

### 2. Require at Least 1 Approval ✅

- **Setting**: `required_approving_review_count: 1`
- **Description**: At least one team member must approve the pull request before it can be merged.
- **Benefit**: Ensures peer review of all code changes, catching potential bugs and improving code quality.

### 3. Dismiss Stale Pull Request Approvals ✅

- **Setting**: `dismiss_stale_reviews: true`
- **Description**: When new commits are pushed to a pull request, previous approvals are automatically dismissed.
- **Benefit**: Ensures that reviewers are aware of and approve the latest changes, not just the initial version.

### 4. Require Status Checks to Pass ✅

- **Setting**: `required_status_checks` is configured with `strict: true`
- **Description**: All configured status checks (CI/CD pipelines, tests, linting, etc.) must pass before merging.
- **Benefit**: Automated quality gates ensure that code meets minimum standards before being merged.

### 5. Require Branches to Be Up to Date ✅

- **Setting**: `strict: true` in `required_status_checks`
- **Description**: Pull request branches must be up to date with the base branch before merging.
- **Benefit**: Prevents merge conflicts and ensures tests run against the latest code.

### 6. Include Administrators in Restrictions ✅

- **Setting**: `enforce_admins: true`
- **Description**: Repository administrators must also follow branch protection rules.
- **Benefit**: Ensures consistent processes for all team members, regardless of permissions.

## Additional Protection Settings

### Conversation Resolution
- **Setting**: `required_conversation_resolution: true`
- **Description**: All conversations on a pull request must be resolved before merging.
- **Benefit**: Ensures all feedback and questions are addressed before merging.

### Force Push Protection
- **Setting**: `allow_force_pushes: false`
- **Description**: Force pushes to the protected branch are not allowed.
- **Benefit**: Prevents accidental history rewriting and data loss.

### Deletion Protection
- **Setting**: `allow_deletions: false`
- **Description**: The protected branch cannot be deleted.
- **Benefit**: Prevents accidental deletion of the main branch.

## How to Apply These Settings

### Option 1: Using GitHub Settings App (Recommended)

1. Install the [GitHub Settings App](https://github.com/apps/settings) on your repository
2. The app will automatically read the `.github/settings.yml` file
3. Settings will be applied automatically when the file is updated

### Option 2: Manual Configuration via GitHub Web Interface

1. Go to your repository on GitHub
2. Click on **Settings** → **Branches**
3. Under "Branch protection rules", click **Add rule**
4. Enter `main` as the branch name pattern
5. Configure the following settings:
   - ✅ Require a pull request before merging
     - ✅ Require approvals (set to 1)
     - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
     - ✅ Require branches to be up to date before merging
   - ✅ Require conversation resolution before merging
   - ✅ Include administrators
   - ✅ Do not allow bypassing the above settings
6. Click **Create** or **Save changes**

### Option 3: Using GitHub API

You can also apply these settings using the GitHub REST API. Example using `curl`:

```bash
curl -X PUT \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/rohitrajak2004/React-Recipe/branches/main/protection \
  -d '{
    "required_pull_request_reviews": {
      "dismiss_stale_reviews": true,
      "required_approving_review_count": 1
    },
    "required_status_checks": {
      "strict": true,
      "contexts": []
    },
    "enforce_admins": true,
    "required_conversation_resolution": true,
    "restrictions": null,
    "allow_force_pushes": false,
    "allow_deletions": false
  }'
```

## Workflow for Contributors

With these branch protection rules in place, the typical workflow is:

1. **Create a Feature Branch**: Create a new branch from `main` for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**: Develop and test your feature locally

3. **Push Your Branch**: Push your feature branch to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request**: Create a PR to merge your feature branch into `main`

5. **Request Review**: Request review from at least one team member

6. **Address Feedback**: Make any requested changes and push new commits

7. **Wait for Approval**: Ensure you have at least one approval

8. **Ensure Checks Pass**: Make sure all status checks are passing

9. **Merge**: Once approved and all checks pass, merge the PR

## Status Checks

Currently, no specific status checks are configured. As you add CI/CD workflows (e.g., GitHub Actions), you can add them to the `contexts` array in the `required_status_checks` section:

```yaml
required_status_checks:
  strict: true
  contexts:
    - "build"
    - "test"
    - "lint"
```

## Maintenance

- Review and update branch protection rules as your team's needs evolve
- Regularly audit who has permissions to modify these settings
- Keep the `.github/settings.yml` file in sync with actual repository settings
- Document any exceptions or special cases

## References

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub Settings App](https://github.com/probot/settings)
- [GitHub REST API - Branch Protection](https://docs.github.com/en/rest/branches/branch-protection)

---

**Last Updated**: 2026-02-07  
**Maintained By**: React-Recipe Team
