import Layout from "@/components/Layout";
import { ProvideTodo } from "@/context/Globalcontext";

export default function App({ Component, pageProps }) {
  return (
    <ProvideTodo>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvideTodo>
  );
}
