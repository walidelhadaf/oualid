import Markdown from "markdown-to-jsx";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function BlogDetails(props) {
  const params = useParams();
  const [content, setContent] = useState("");
  const blogId = params.id;
  const blogFile = params.title;
  const fileName = `${blogFile}.md`;

  useEffect(() => {
    import(`../blog/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [fileName]); // Ajout d'une dépendance pour éviter les appels multiples à useEffect

  return (
    <Layout>
      <Helmet>
        <title>Blog Details - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Blog Details Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            {/* Affichage du contenu Markdown */}
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default BlogDetails;
