import { Link, ssr } from "arnext";
import { useEffect, useState } from "react";

const getDate = async (date) => date ?? Date.now();

export const getStaticProps = ssr(async ({}) => {
  return { props: { _date: Date.now() }, revalidate: 100 };
});

export default function Home({ _date = null }) {
  const [date, setDate] = useState(_date);

  useEffect(() => {
    (async () => _date ?? setDate(await getDate()))();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-16">
        <Tabs defaultValue="seeker" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="seeker">Job Seeker</TabsTrigger>
            <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
          </TabsList>
          <TabsContent value="seeker">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="recruiter">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      home: {date} | <Link href="/post/a">post-a</Link> |{" "}
      <Link href="/abc">404</Link>
    </>
  );
}
