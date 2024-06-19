// import { renderHook } from "@testing-library/react";
// import { setupServer } from "msw/node";
// import { http, HttpResponse } from "msw";
// import { useBlogs } from "../useBlogs";

// const handlers = [
//   // Intercept "GET https://example.com/user" requests...
//   http.get("http://localhost:6005/api/blogs", () => {
//     // ...and respond to them using this JSON response.
//     return HttpResponse.json([
//       {
//         googleId: "123",
//         creator: "wilbert",
//         title: "My first blog",
//         content: "test",
//       },
//     ]);
//   }),
// ];

// const server = SetupServerApi(...handlers);

// // server.listen();

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe("testing useBlogs hooks", async () => {
//   const { result, waitForNextUpdate } = renderHook(() => useBlogs());
//   const fetchResult = [
//     {
//       googleId: "123",
//       creator: "wilbert",
//       title: "My first blog",
//       content: "test",
//     },
//   ];

//   await waitForNextUpdate();

//   expect(result.current).toEqual(fetchResult);
// });
