import { TestimonialsSection } from "./ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyadata",
      avatar:
        "https://images.unsplash.com/photo-1719406506787-c99201c592ab?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    text: "Manoj's expertise in building robust data pipelines helped us scale our analytics platform seamlessly.",
    href: "https://linkedin.com/in/priyadata",
  },
  {
    author: {
      name: "Rahul Verma",
      handle: "@rahultechlead",
      avatar:
        "https://plus.unsplash.com/premium_photo-1723478495487-c436ae82f48f?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    text: "A true professional in cloud data engineering. Manoj's solutions are always efficient and reliable.",
    href: "https://linkedin.com/in/rahultechlead",
  },
  {
    author: {
      name: "Emily Chen",
      handle: "@emilyanalytics",
      avatar:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
    text: "Working with Manoj was a pleasure. His knowledge of ETL and data warehousing is top-notch.",
    href: "https://linkedin.com/in/emilyanalytics",
  },
];

export default function JudgesPanel() {
  return (
    <TestimonialsSection
      title="Testimonials"
      description="What colleagues and managers say about my work in data engineering."
      testimonials={testimonials}
    />
  );
}
