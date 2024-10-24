"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
}

const courseCategories: Record<string, Course[]> = {
  "Web Development": [
    {
      id: 1,
      title: "HTML & CSS",
      description: "Master the basics of HTML and CSS.",
      image: "/img html.jpeg",
      link: "/html-css",
      duration: "4 weeks",
      difficulty: "Beginner",
      tags: ["Popular"],
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      description:
        "Learn JavaScript from scratch and build interactive websites.",
      image: "/img js.png",
      link: "/courses/javascript",
      duration: "6 weeks",
      difficulty: "Intermediate",
      tags: ["JavaScript", "Web Development"],
    },
    {
      id: 3,
      title: "React for Beginners",
      description: "Dive into React and build modern web applications.",
      image: "/img react.jpeg",
      link: "/courses/react",
      duration: "8 weeks",
      difficulty: "Intermediate",
      tags: ["React", "JavaScript"],
    },
    {
      id: 4,
      title: "Node.js Basics",
      description:
        "Learn the fundamentals of Node.js and server-side development.",
      image: "/img node.jpeg",
      link: "/courses/nodejs",
      duration: "5 weeks",
      difficulty: "Intermediate",
      tags: ["Node.js", "Backend"],
    },
    {
      id: 5,
      title: "CSS Flexbox and Grid",
      description: "Master layout techniques using Flexbox and CSS Grid.",
      image: "/flex.png",
      link: "/courses/css-flexbox-grid",
      duration: "3 weeks",
      difficulty: "Beginner",
      tags: ["CSS", "Web Design"],
    },
    {
      id: 6,
      title: "Full Stack Development",
      description:
        "Become a full stack developer by mastering both frontend and backend.",
      image: "/full.jpeg",
      link: "/courses/fullstack",
      duration: "12 weeks",
      difficulty: "Advanced",
      tags: ["Full Stack", "JavaScript"],
    },
  ],
  "Data Science": [
    {
      id: 7,
      title: "Introduction to Data Science",
      description: "Learn the basics of data science and analytics.",
      image: "/datascience.jpeg",
      link: "/courses/data-science",
      duration: "8 weeks",
      difficulty: "Beginner",
      tags: ["Data Science", "Analytics"],
    },
    {
      id: 8,
      title: "Machine Learning with Python",
      description:
        "Discover the fundamentals of machine learning using Python.",
      image: "/py.jpeg",
      link: "/courses/machine-learning",
      duration: "10 weeks",
      difficulty: "Intermediate",
      tags: ["Machine Learning", "Python"],
    },
    {
      id: 9,
      title: "Data Visualization Techniques",
      description:
        "Learn to visualize data effectively using tools like Tableau.",
      image: "/tech.png",
      link: "/courses/data-visualization",
      duration: "6 weeks",
      difficulty: "Intermediate",
      tags: ["Data Visualization", "Tableau"],
    },
  ],
  "Mobile Development": [
    {
      id: 10,
      title: "Android App Development",
      description: "Build your first Android app using Kotlin.",
      image: "/android.jpeg",
      link: "/courses/android-development",
      duration: "8 weeks",
      difficulty: "Beginner",
      tags: ["Android", "Mobile Development"],
    },
    {
      id: 11,
      title: "iOS Development with Swift",
      description: "Learn to develop iOS apps using Swift.",
      image: "/ios.jpeg",
      link: "/courses/ios-development",
      duration: "8 weeks",
      difficulty: "Intermediate",
      tags: ["iOS", "Swift", "Mobile Development"],
    },
    {
      id: 12,
      title: "Cross-Platform App Development",
      description: "Develop apps for both iOS and Android using React Native.",
      image: "/cross.jpeg",
      link: "/courses/react-native",
      duration: "10 weeks",
      difficulty: "Intermediate",
      tags: ["React Native", "Mobile Development"],
    },
  ],
};

type CourseCategory = keyof typeof courseCategories;

const Courses: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<CourseCategory>("Web Development");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const filteredCourses = courseCategories[activeCategory].filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === "All" || course.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <section id="courses" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>

        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
          {Object.keys(courseCategories).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-teal-800 text-white"
                  : "bg-white text-teal-500"
              }`}
              onClick={() => setActiveCategory(category as CourseCategory)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded w-full md:w-1/2 mb-4 md:mb-0"
          />

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border rounded"
          >
            <option value="All">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded shadow">
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                className="w-full rounded mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="mb-2">{course.description}</p>
              <p className="text-sm text-gray-600">
                Duration: {course.duration}
              </p>
              <p className="text-sm text-gray-600">
                Difficulty: {course.difficulty}
              </p>

              {/* Render tags */}
              <div className="mb-2">
                {course.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-500 px-2 py-1 text-xs rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href={course.link} className="text-blue-500 hover:underline">
                View Course
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
