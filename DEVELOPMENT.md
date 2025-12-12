# Development Guide

This guide will help you set up a development environment for GestureFlow.

## Prerequisites

- **Git**: For version control
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge (with camera support)
- **Text Editor/IDE**: VS Code, Sublime Text, or any code editor
- **Local Web Server**: Python's http.server or similar

## Getting Started

### 1. Fork and Clone the Repository

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/GestureFlow.git
cd GestureFlow

# Add upstream remote
git remote add upstream https://github.com/SnakeEye-sudo/GestureFlow.git
```

### 2. Set Up Your Development Branch

```bash
# Always create a new branch from main
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
```

### 3. Run the Application Locally

Since this is a static web app, you'll need a simple HTTP server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npm install -g http-server
http-server
```

Then open your browser to: `http://localhost:8000`

## Project Structure

```
GestureFlow/
├── index.html              # Root entry point
├── public/
│   └── index.html         # Alternative entry point
├── .github/
│   └── pull_request_template.md  # PR template
├── CONTRIBUTING.md        # Contribution guidelines
├── CODE_OF_CONDUCT.md     # Community standards
├── DEVELOPMENT.md         # This file
├── README.md              # Project documentation
├── LICENSE                # MIT License
└── .gitignore            # Git ignore rules
```

## Key Technologies

- **MediaPipe**: Hand detection and gesture recognition
- **Canvas API**: Real-time video rendering
- **Vanilla JavaScript**: No dependencies, lightweight
- **CSS Grid**: Responsive layout
- **HTML5**: Modern structure

## Understanding the Code

### Main Components

1. **Camera Initialization**
   - Uses MediaPipe's Camera utility
   - Requires hidden `<video>` element
   - Processes frames for hand detection

2. **Hand Detection**
   - MediaPipe Hands model
   - 21 landmarks per hand
   - Landmark coordinates (x, y, z)

3. **Gesture Recognition**
   - Finger position analysis
   - Landmark-based detection
   - Confidence scoring

4. **UI Updates**
   - Real-time stats display
   - Gesture history tracking
   - Error handling and feedback

### Code Flow

```
1. Start Detection Button Click
   ↓
2. Initialize Hands Model & Camera
   ↓
3. Request Camera Permission
   ↓
4. Start Video Stream
   ↓
5. For Each Frame:
   - Detect Hand Landmarks
   - Analyze Gesture
   - Update UI
   - Record Detection
```

## Making Changes

### Adding a New Gesture

1. Open `index.html` or `public/index.html`
2. Find the `detectGesture()` function
3. Add a new condition:

```javascript
if (/* your conditions */) {
    return { name: 'Gesture Name 🎵', conf: 0.90 };
}
```

### Improving Hand Landmark Visualization

- Modify the `drawHand()` function
- Change circle size, color, or connection lines
- Update the `pairs` array for different connections

### Enhancing the UI

- Modify CSS in the `<style>` section
- Update HTML structure in the body
- Keep responsive design in mind

## Testing Your Changes

1. **Manual Testing**
   - Start the local server
   - Open browser to localhost:8000
   - Test with actual hand gestures
   - Check browser console for errors

2. **Browser Compatibility**
   - Test on Chrome, Firefox, Safari
   - Check mobile browsers (if applicable)
   - Verify camera permission flow

3. **Performance**
   - Monitor detection latency
   - Check for memory leaks
   - Test on different devices

## Debugging Tips

### Browser Console
```javascript
// Check hand detection
console.log(results.multiHandLandmarks);

// Check detected gesture
console.log(gesture);

// Check canvas dimensions
console.log(canvas.width, canvas.height);
```

### Common Issues

| Problem | Solution |
|---------|----------|
| Camera doesn't start | Check browser permissions, try different browser |
| No hand detection | Ensure good lighting, show hand clearly to camera |
| Slow performance | Check video resolution, close other tabs |
| "Not a function" error | Ensure MediaPipe libraries are loaded |

## Committing Changes

```bash
# Stage changes
git add .

# Commit with clear message
git commit -m "Add feature: description"

# Push to your fork
git push origin feature/your-feature-name
```

## Creating a Pull Request

1. Push your branch
2. Go to original repository
3. Click "New Pull Request"
4. Select your branch
5. Fill PR template completely
6. Request review

## Additional Resources

- [MediaPipe Documentation](https://developers.google.com/mediapipe)
- [Canvas API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Git Workflow Guide](https://guides.github.com/introduction/flow/)

## Getting Help

- Check existing issues first
- Read CONTRIBUTING.md
- Follow CODE_OF_CONDUCT.md
- Ask in issue discussions

## Performance Optimization

When adding features:
- Minimize DOM updates
- Optimize loop iterations
- Avoid blocking operations
- Cache frequently accessed elements

---

**Happy developing! If you have questions, open an issue!** 🚀
