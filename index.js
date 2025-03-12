// Import required modules
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

// Set view engine to use EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    res.render("index", {
        name: "Lavesh Bansal",
        email: "lavesh.ba@gmail.com",
        phone: "+1 647-523-5839",
        linkedin: "www.linkedin.com/in/lavesh-bansal",
        workExperience: [
            {
                role: "Senior Software Developer",
                company: "Capco, Toronto",
                duration: "Sep 2019 – Present",
                highlights: [
                    "Built an IDE plugin integrating Ollama for real-time code generation.",
                    "Developed an intuitive mortgage assistance chatbot application in Angular 17.",
                    "Led the migration of legacy ReactJS and AngularJS web pages to Angular 15."
                ]
            },
            {
                role: "Software Developer",
                company: "Infosys Ltd, India",
                duration: "July 2014 - Aug 2018",
                highlights: [
                    "Worked on .NET applications with jQuery front-end.",
                    "Handled SQL database optimization and production support."
                ]
            }
        ],
        skills: ["Angular", "Node.js", "React", "JavaScript", "TypeScript", "Python", "PostgreSQL", "AWS", "Azure"],
        education: [
            { degree: "Master of Software Engineering", school: "University of Western Ontario", year: "2018-2019" },
            { degree: "Bachelor of Engineering in Electrical and Electronics", school: "Panjab University, Chandigarh", year: "2010-2014" }
        ]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// EJS template (views/index.ejs)
const ejsTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= name %> - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-900">
    <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-4xl font-bold text-center mb-6"><%= name %></h1>
        <p class="text-center text-gray-600">📧 <%= email %> | 📞 <%= phone %> | 🌐 <a href="<%= linkedin %>" class="text-blue-500">LinkedIn</a></p>
        
        <h2 class="text-2xl font-semibold mt-6">Work Experience</h2>
        <% workExperience.forEach(job => { %>
            <div class="mt-4 p-4 border rounded shadow-sm bg-white">
                <h3 class="text-xl font-bold"><%= job.role %> - <%= job.company %></h3>
                <p class="text-gray-600"><%= job.duration %></p>
                <ul class="list-disc ml-6">
                    <% job.highlights.forEach(point => { %>
                        <li><%= point %></li>
                    <% }) %>
                </ul>
            </div>
        <% }) %>
        
        <h2 class="text-2xl font-semibold mt-6">Skills</h2>
        <div class="flex flex-wrap gap-2 mt-2">
            <% skills.forEach(skill => { %>
                <span class="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm"><%= skill %></span>
            <% }) %>
        </div>
        
        <h2 class="text-2xl font-semibold mt-6">Education</h2>
        <% education.forEach(edu => { %>
            <div class="mt-4 p-4 border rounded shadow-sm bg-white">
                <h3 class="text-xl font-bold"><%= edu.degree %></h3>
                <p class="text-gray-600"><%= edu.school %> - <%= edu.year %></p>
            </div>
        <% }) %>
    </div>
</body>
</html>
`;

const fs = require("fs");
fs.mkdirSync("views", { recursive: true });
fs.writeFileSync("views/index.ejs", ejsTemplate);
