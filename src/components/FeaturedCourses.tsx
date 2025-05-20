"use client";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "React Development",
      slug: "react-development",
      description:
        "Learn React from scratch and build modern web applications. Master hooks, state management, and more.",
      price: 499,
      instructor: "Shivam Mittal",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Next.js Mastery",
      slug: "nextjs-mastery",
      description:
        "Deep dive into Next.js and learn server-side rendering, static generation, and API routes.",
      price: 599,
      instructor: "Shivam Mittal",
      isFeatured: true,
    },
    {
      id: 3,
      title: "TypeScript Fundamentals",
      slug: "typescript-fundamentals",
      description:
        "Master TypeScript and build type-safe applications. Learn interfaces, generics, and advanced types.",
      price: 399,
      instructor: "Shivam Mittal",
      isFeatured: true,
    },
  ];

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With Me
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {courses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                    {course.title}
                  </h3>
                  <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <div className="flex flex-col mt-4">
                    <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                      <span>Instructor: {course.instructor}</span>
                    </div>
                    <div className="flex items-center mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span>Price: ${course.price}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link href={`/courses/${course.slug}`}>
                      <button className="mt-4 w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-white hover:opacity-90 transition-opacity">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses; 