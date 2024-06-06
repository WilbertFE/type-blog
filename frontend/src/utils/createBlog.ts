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
    const response = await fetch("http://localhost:6005/api/blogs", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });
    if (response.status !== 201) {
      throw new Error();
    }
  } catch (err: unknown) {
    console.log("failed to create blog");
  }
};
