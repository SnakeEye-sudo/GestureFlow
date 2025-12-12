# Contributing to GestureFlow

Thank you for your interest in contributing to GestureFlow! We welcome contributions from everyone. Please read these guidelines before submitting your contributions.

## How to Contribute

### 1. Fork the Repository
- Click the "Fork" button at the top right of the repository
- This creates a copy of the project under your account

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/GestureFlow.git
cd GestureFlow
```

### 3. Create a New Branch
- Always create a new branch for your changes (never work on `main`)
```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b bugfix/bug-name
```

### 4. Make Your Changes
- Write clean, readable code
- Follow the existing code style and conventions
- Test your changes thoroughly
- Update documentation if necessary

### 5. Commit Your Changes
```bash
git add .
git commit -m "Brief description of changes"
```

### 6. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request
- Go to the original repository
- Click "New Pull Request"
- Select your branch
- Fill in the PR template with details
- Submit for review

## Branch Naming Conventions

- **Feature**: `feature/short-description` (e.g., `feature/add-hand-landmarks`)
- **Bug Fix**: `bugfix/short-description` (e.g., `bugfix/camera-lag`)
- **Documentation**: `docs/short-description`
- **Performance**: `perf/short-description`
- **Refactor**: `refactor/short-description`

## Code Style

### JavaScript
- Use 4 spaces for indentation
- Use camelCase for variables and functions
- Use PascalCase for classes
- Add comments for complex logic
- Use meaningful variable names

### CSS
- Use 4 spaces for indentation
- Keep selectors simple
- Organize properties logically
- Use meaningful class names

## Testing

Before submitting a PR:
- Test your changes locally
- Ensure the app loads without errors
- Test gesture detection with actual hand movements
- Check responsive design on different screen sizes

## Commit Message Guidelines

- Use present tense: "Add feature" not "Added feature"
- Use imperative mood: "Move cursor to..." not "Moves cursor to..."
- Limit first line to 50 characters
- Reference issues if applicable: "Fixes #123"

## Pull Request Process

1. **Describe Changes**: Clearly describe what your PR does
2. **Reference Issues**: Link to relevant issues using "Fixes #123"
3. **Screenshots**: Add screenshots for UI changes
4. **Testing**: Mention how you tested the changes
5. **Documentation**: Update docs if needed

## Types of Contributions Welcome

### 🐛 Bug Fixes
- Report bugs with clear descriptions
- Include steps to reproduce
- Suggest fixes if you have ideas

### ✨ Features
- New gesture types
- Improved hand detection
- Better UI/UX
- Performance optimizations

### 📚 Documentation
- Improve README
- Add setup guides
- Document APIs
- Add code examples

### 🎨 UI/UX Improvements
- Design improvements
- Better accessibility
- Mobile responsiveness
- User experience enhancements

## Main Branch Protection

The `main` branch is protected:
- ✅ All PRs must be reviewed
- ✅ All tests must pass
- ✅ All commits must be from branches
- ❌ No direct commits to main

## Questions?

- Check existing issues first
- Create a new issue for questions
- Discuss feature ideas in issues before implementing

## Code of Conduct

Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community guidelines.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Happy Contributing! 🚀**
