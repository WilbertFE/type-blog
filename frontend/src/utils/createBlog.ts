import axios from "axios";

export const createBlog = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const blogData = {
    title: (target.elements.namedItem("title") as HTMLInputElement).value,
    description: (target.elements.namedItem("description") as HTMLInputElement)
      .value,
    content: (target.elements.namedItem("content") as HTMLInputElement).value,
  };
  try {
    const response = await axios.post(
      "http://localhost:6005/api/blogs",
      JSON.stringify(blogData),
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    const result = response.data;
    return result;
  } catch (err: unknown) {
    return err;
  }
};
