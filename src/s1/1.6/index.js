// Lesson 1.6: Arrow functions
// ========================================

let createBlog = (title, body) => {
  if (!title) {
    throw new Error('A title is requied');
  }

  if (!body) {
    throw new Error('A body is requied');
  }

  return alert(`${title} - ${body}`);
}

createBlog('Blog title', 'Blog body');