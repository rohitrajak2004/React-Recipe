# GitHub Configuration

This directory contains GitHub-specific configuration files for the React-Recipe repository.

## Files

### `settings.yml`
Complete repository settings including branch protection rules. Compatible with the [GitHub Settings App (Probot Settings)](https://github.com/probot/settings).

**Key Features:**
- Branch protection rules for `main` branch
- Repository settings and preferences
- Automated security configuration

### `BRANCH_PROTECTION.md`
Comprehensive documentation for branch protection rules including:
- Detailed explanation of each protection setting
- Multiple implementation methods (App, Manual, API)
- Contributor workflow guidelines
- Maintenance instructions

## Quick Start

To apply the branch protection rules configured in `settings.yml`:

1. **Automated (Recommended)**: Install the [GitHub Settings App](https://github.com/apps/settings) on this repository
2. **Manual**: Follow the step-by-step guide in `BRANCH_PROTECTION.md`
3. **API**: Use the provided API examples in `BRANCH_PROTECTION.md`

## Branch Protection Rules Summary

The `main` branch is protected with the following rules:

- ✅ Require pull request before merging
- ✅ Require at least 1 approval
- ✅ Dismiss stale approvals on new commits
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators in restrictions

For complete details, see `BRANCH_PROTECTION.md`.

---

**Maintained By**: React-Recipe Team  
**Last Updated**: 2026-02-07
