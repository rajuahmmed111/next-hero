import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="p-24">
      {blogs.map((blog) => (
        <div key={blog.slug} className="border-2 mb-3 p-12 space-y-3">
          <h3 className="text-xl">{blog.title}</h3>
          <h3 className="text-lg">{blog.description}</h3>
          <button className="text-lg font-semibold p-4 bg-[#E2E8F0] text-purple-800 rounded-md ">
            <Link href={`/blog/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

const blogs = [
  {
    slug: "understanding-typescript",
    title: "Understanding TypeScript: A Beginner's Guide",
    description:
      "Learn the basics of TypeScript and how it enhances JavaScript development with static typing and improved tooling.",
  },
  {
    slug: "top-features-next.js-15",
    title: "Top 10 Features of Next.js 15",
    description:
      "Explore the newest features in Next.js 15, including faster builds, enhanced server-side rendering, and better data fetching.",
  },
  {
    slug: "integrating-apple-pay",
    title: "Integrating Apple Pay in Your Web App",
    description:
      "Step-by-step guide to adding Apple Pay support in your React and Node.js application for a seamless payment experience.",
  },
  {
    slug: "trainer-dashboard-next.js",
    title: "Building a Trainer Dashboard with Next.js and TypeScript",
    description:
      "Create a dynamic trainer dashboard with video upload capabilities using Next.js and TypeScript.",
  },
  {
    slug: "secure-authentication-nodejs",
    title: "Best Practices for Secure User Authentication in Node.js",
    description:
      "Essential strategies for implementing secure user authentication in Node.js with TypeScript and Mongoose.",
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance: Tips and Techniques",
    description:
      "Learn effective techniques to boost the performance of your React applications, including code splitting and lazy loading.",
  },
  {
    slug: "introduction-to-mongodb",
    title: "Introduction to MongoDB: A NoSQL Database Guide",
    description:
      "A beginner's guide to MongoDB, covering its key features, data modeling, and how to perform CRUD operations.",
  },
  {
    slug: "Dockerize-nodejs-app",
    title: "Dockerize a Node.js Application",
    description:
      "Learn how to containerize your Node.js application using Docker for easy deployment and scalability.",
  },
  {
    slug: "graphql-vs-rest-api",
    title: "GraphQL vs REST API: Which One to Choose?",
    description:
      "A detailed comparison of GraphQL and REST API, highlighting their differences and use cases to help you choose the right approach.",
  },
  {
    slug: "build-e-commerce-next.js",
    title: "Building an E-commerce App with Next.js and MongoDB",
    description:
      "A complete guide to building a scalable e-commerce application using Next.js, TypeScript, and MongoDB.",
  },
];

export default BlogPage;
