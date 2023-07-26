import React, { useReducer, useState } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case "delete_blogpost":
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);
  // const [blogPosts, setBlogPosts] = useState([]);
  // const blogPosts = [{ title: "Blog Post #1 " }, { title: "Blog Post #2 " }];

  // const addBlogPost = () => {
  //   setBlogPosts([
  //     ...blogPosts,
  //     { title: `Blog Post #${blogPosts.length + 1}` },
  //   ]);
  // };

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
