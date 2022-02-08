import { Link, LoaderFunction, useLoaderData } from "remix";
import * as deseoPost from "./deseo.mdx";
import * as murmuroPost from "./murmuro.mdx";
import * as dondePost from "./donde.mdx";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(deseoPost),
    postFromModule(murmuroPost),
    postFromModule(dondePost),
  ];
};

export default function BlogIndex() {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? (
              <p className="m-0 lg:m-0">{post.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
