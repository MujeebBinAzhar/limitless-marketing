"use client";
import React, { useEffect, useState } from "react";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempQuery, setTempQuery] = useState("");

  const fetchNews = async (page = 0, query = "") => {
    setLoading(true);
    try {
      // Using your API key from the example
      const apiKey = "pub_791719f8ca6dbc02afa2df69f7402d9c13baf";
      let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&q=query&size=9`;

      // Add search query if provided
      if (query) {
        url += `&q=${encodeURIComponent(query)}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();

      if (data.status === "success") {
        setNews(data.results || []);
        setNextPage(data.nextPage);
      } else {
        throw new Error(data.results?.message || "Failed to fetch news");
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage) {
      // Go back to the first page if we can't determine the previous page
      setCurrentPage(0);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(tempQuery);
    setCurrentPage(0); // Reset to first page on new search
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error}. Please try again later.
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1 className="mb-4">Latest News</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={tempQuery}
            onChange={(e) => setTempQuery(e.target.value)}
            placeholder="Search news..."
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {news.length === 0 ? (
            <div className="alert alert-info text-center">
              No news articles found. Try a different search query.
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
              {news.map((article) => (
                <div key={article.article_id} className="col">
                  <div className="card h-100">
                    {article.image_url ? (
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/400/320";
                        }}
                      />
                    ) : (
                      <div
                        className="card-img-top bg-light d-flex align-items-center justify-content-center"
                        style={{ height: "200px" }}>
                        <span className="text-muted">No image available</span>
                      </div>
                    )}

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">
                        {(article.description?.slice(0, 300) ||
                          "No description available") +
                          (article.description?.length > 300 ? "..." : "")}
                      </p>

                      <div className="mt-auto">
                        <div className="d-flex justify-content-between text-muted small mb-2">
                          <span>{article.source_name}</span>
                          <span>{formatDate(article.pubDate)}</span>
                        </div>

                        {article.category && article.category.length > 0 && (
                          <div className="d-flex flex-wrap gap-1 mt-2">
                            {article.category.map((cat, index) => (
                              <span
                                key={index}
                                className="badge bg-primary bg-opacity-10 text-primary">
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}

                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm mt-3">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="d-flex justify-content-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="btn btn-primary"
              style={{ opacity: currentPage === 0 ? 0.65 : 1 }}>
              Previous Page
            </button>

            <button
              onClick={handleNextPage}
              disabled={!nextPage}
              className="btn btn-primary"
              style={{ opacity: !nextPage ? 0.65 : 1 }}>
              Next Page
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsSection;
