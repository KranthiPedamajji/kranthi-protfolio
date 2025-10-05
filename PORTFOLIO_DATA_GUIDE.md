# How to Update Your Portfolio Content

This guide explains how to modify the `src/lib/portfolio-data.json` file to update the content of your portfolio website. All the text, links, and data displayed on your site are pulled from this single file, making it easy to manage.

## File Location

You can find the data file at: `src/lib/portfolio-data.json`

---

## JSON Structure and How to Edit

The JSON is divided into objects, each representing a section of your website.

### 1. `name`

- **Purpose**: Your name, displayed in the header.
- **Type**: `string`
- **Example**: `"name": "Kranthi"`

### 2. `resumeUrl`

- **Purpose**: The path to your resume file for the download button.
- **Type**: `string`
- **How to use**: Place your resume file (e.g., `Kranthi_Pedamajji_Resume.pdf`) in the `public/` directory of your project and set this value to `/Kranthi_Pedamajji_Resume.pdf`.
- **Example**: `"resumeUrl": "/Kranthi_Pedamajji_Resume.pdf"`

### 3. `navLinks`

- **Purpose**: The navigation links in the header.
- **Type**: `array` of `objects`
- **How to edit**: Each object in the array represents a link.
  - `href`: The section ID to scroll to (e.g., `#about`).
  - `label`: The text displayed for the link.
- **Example**:
  ```json
  "navLinks": [
    { "href": "#home", "label": "Home" },
    { "href": "#about", "label": "About" }
  ]
  ```

### 4. `hero`

- **Purpose**: The content for the main hero section.
- **Type**: `object`
- **Fields**:
  - `title`: The main headline.
  - `skills`: An array of strings for the typewriter effect.
  - `description`: The introductory paragraph.
  - `cta`: An object for the call-to-action buttons (`projects`, `resume`, `contact`).
- **Example**:
  ```json
  "hero": {
    "title": "Kranthi's Kinetic Portfolio",
    "skills": ["Full Stack Developer.", "Data Engineer."],
    "description": "A brief intro about yourself.",
    "cta": {
      "projects": "View My Work",
      "resume": "Download Resume",
      "contact": "Contact Me"
    }
  }
  ```

### 5. `about`

- **Purpose**: The "About Me" section.
- **Type**: `object`
- **Fields**:
  - `title`: The section title.
  - `paragraphs`: An array of strings, where each string is a paragraph.
- **Example**:
  ```json
  "about": {
    "title": "About Me",
    "paragraphs": [
      "First paragraph about you.",
      "Second paragraph with more details."
    ]
  }
  ```

### 6. `skills`

- **Purpose**: The "Skills & Expertise" section.
- **Type**: `object`
- **Fields**:
  - `title`: The section title.
  - `categories`: An object where each key is a skill category (e.g., "Languages"). The value is an array of skill objects.
    - `name`: The name of the skill (e.g., "Python").
    - `level`: Your proficiency level from 0 to 100.
- **Example**:
  ```json
  "skills": {
    "title": "Skills & Expertise",
    "categories": {
      "Languages": [
        { "name": "Python", "level": 95 },
        { "name": "JavaScript", "level": 90 }
      ]
    }
  }
  ```

### 7. `experience`

- **Purpose**: The "Work Experience" section.
- **Type**: `object`
- **Fields**:
  - `title`: The section title.
  - `subtitle`: A short subtitle.
  - `jobs`: An array of job objects.
    - `role`, `company`, `period`, `description`: Strings for your job details.
    - `skills`: An array of strings for the skill pills.
- **Example**:
  ```json
  "experience": {
    "title": "Work Experience",
    "subtitle": "My professional journey.",
    "jobs": [
      {
        "role": "Software Engineer",
        "company": "Tech Corp",
        "period": "Jan 2022 – Present",
        "description": "What you did in this role.",
        "skills": ["Python", "React", "AWS"]
      }
    ]
  }
  ```

### 8. `projects`

- **Purpose**: The "Featured Projects" section.
- **Type**: `object`
- **Fields**:
  - `title`, `subtitle`: Strings for the section headers.
  - `items`: An array of project objects.
    - `title`, `description`, `technologies`, `githubUrl`: Strings for project details.
    - `liveUrl`: (Optional) A string for the live demo link. If you don't have one, you can omit this or leave it as an empty string.
- **Example**:
  ```json
  "projects": {
    "title": "Featured Projects",
    "subtitle": "A selection of my work.",
    "items": [
      {
        "title": "Project One",
        "description": "A description of the project.",
        "technologies": "React, Node.js, Firebase",
        "githubUrl": "https://github.com/your-repo"
      }
    ]
  }
  ```

### 9. `education`

- **Purpose**: The "Education" section.
- **Type**: `object`
- **Fields**:
  - `title`, `subtitle`: Strings for the section headers.
  - `degrees`: An array of degree objects.
    - `degree`, `university`, `period`, `location`, `gpa`: Strings for your academic details.
- **Example**:
  ```json
s
  "education": {
    "title": "Education",
    "subtitle": "My academic background.",
    "degrees": [
      {
        "degree": "Master’s in Data Science",
        "university": "State University",
        "period": "2021 – 2023",
        "location": "City, State",
        "gpa": "4.0"
      }
    ]
  }
  ```

### 10. `contact`

- **Purpose**: The "Get In Touch" section.
- **Type**: `object`
- **Fields**:
  - `title`, `description`: Strings for the section headers.
  - `email`, `phone`, `linkedin`, `github`: Your contact information and social links.
  - `buttons`: An object containing the text for each contact button.
- **Example**:
  ```json
  "contact": {
    "title": "Get In Touch",
    "description": "Feel free to reach out.",
    "email": "youremail@example.com",
    "phone": "+1234567890",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourprofile",
    "buttons": {
        "email": "Email Me",
        "phone": "Call Me",
        "linkedin": "LinkedIn",
        "github": "GitHub"
    }
  }
  ```

After modifying `portfolio-data.json`, simply save the file, and your website will update with the new content automatically.
