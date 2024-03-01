// Your JSON data as a string
const jsonData = `{
    "name": "Harish",
    "contact": {
      "email": "harish@gmail.com",
      "phone": "+91 9876543210",
      "address": "123 Main St, Anytown, India"
    },
    "education": [
      {
        "degree": "Bachelor of Computer Application",
        "school": "University of Anytown",
        "graduation_year": 2023
      }
    ],
    "experience": [
      {
        "title": "Software Developer",
        "company": "TechCorp",
        "start_date": "2023-01-01",
        "end_date": "2023-12-31",
        "description": "Worked on various projects involving web development and software engineering."
      }
    ],
    "skills": [
      "React Native",
      "Full Stack Development"
    ]
  }`;

// Parse the JSON string into a JavaScript object
const resumeData = JSON.parse(jsonData);

// Iterate over the education array using a for loop
console.log("Education (for loop):");
for (let i = 0; i < resumeData.education.length; i++) {
    const education = resumeData.education[i];
    console.log(`- ${education.degree} from ${education.school}, Graduation Year: ${education.graduation_year}`);
}

// Iterate over the experience array using a for...in loop
console.log("\nExperience (for...in loop):");
for (const key in resumeData.experience) {
    const experience = resumeData.experience[key];
    console.log(`- ${experience.title} at ${experience.company}, ${experience.start_date} to ${experience.end_date}: ${experience.description}`);
}

// Iterate over the skills array using a forEach loop
console.log("\nSkills (forEach loop):");
resumeData.skills.forEach(skill => {
    console.log(`- ${skill}`);
});

console.log("Education:");
for (const education of resumeData.education) {
    console.log(`- ${education.degree} from ${education.school}, Graduation Year: ${education.graduation_year}`);
}

// Iterate over the experience array using a for...of loop
console.log("\nExperience:");
for (const experience of resumeData.experience) {
    console.log(`- ${experience.title} at ${experience.company}, ${experience.start_date} to ${experience.end_date}: ${experience.description}`);
}

// Iterate over the skills array using a for...of loop
console.log("\nSkills:");
for (const skill of resumeData.skills) {
    console.log(`- ${skill}`);
}