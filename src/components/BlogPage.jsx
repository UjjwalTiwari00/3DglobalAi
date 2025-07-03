import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const tags = [
      "ai",
      "technology",
      "energy",
      "renewable",
      "power",
      "gas",
      "solar",
      "nuclear",
      "wind"
    ];

    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const requests = tags.map((tag) =>
          fetch(`https://dev.to/api/articles?tag=${tag}&per_page=2`).then((res) =>
            res.json()
          )
        );

        const results = await Promise.all(requests);
        const combined = results.flat();
        const unique = Array.from(new Map(combined.map((item) => [item.id, item])).values());
        setBlogs(unique);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-30 ">
    

      {loading ? (
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-dashed rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-blue-600 font-medium">Loading blogs...</p>
        </div>
      ) : (
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
            {blogs.slice(0, visibleCount).map((blog) => (
              <div
                key={blog.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-5xl"
              >
                <img
                  src={blog.cover_image || "https://via.placeholder.com/600x400"}
                  alt={blog.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 flex flex-col h-[200px]">
                  <h2 className="text-md font-semibold mb-2 text-gray-800 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {expanded[blog.id]
                      ? blog.description
                      : blog.description?.slice(0, 100) + "..."}
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 font-medium hover:underline"
                    >
                      Visit →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < blogs.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPage;
