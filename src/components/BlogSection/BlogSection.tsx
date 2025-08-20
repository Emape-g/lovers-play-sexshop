import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <div className="space-y-6">
        <article className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Post de ejemplo 1</h3>
          <p className="text-gray-600">
            Este es un post de ejemplo en el blog. Podés reemplazarlo con tu
            contenido real más adelante.
          </p>
        </article>
        <article className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Post de ejemplo 2</h3>
          <p className="text-gray-600">
            Otro post de prueba para ver cómo se ve la sección del blog.
          </p>
        </article>
      </div>
    </section>
  );
};

export default BlogSection;

