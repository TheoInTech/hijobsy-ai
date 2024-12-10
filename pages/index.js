import { ssr } from "arnext";
import { useEffect, useState } from "react";

// components
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="w-screen h-screen">
      <ThemeToggle className="fixed top-4 right-4" />
      <Tabs defaultValue="seeker">
        <TabsList className="fixed top-4 left-4">
          <TabsTrigger value="seeker">Job Seeker</TabsTrigger>
          <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
        </TabsList>

        <TabsContent
          value="seeker"
          className="flex flex-col gap-8 justify-center items-center p-16 w-full min-h-screen"
        >
          <div className="flex flex-col gap-4 text-3xl font-semibold font-workSans">
            Looking for your dream job? Let&apos;s find it!
          </div>
          <div className="w-full max-w-2xl border-2 min-h-56 rounded-lg border-transparent [background:linear-gradient(to_right,hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--accent)))_border-box]">
            <Textarea
              placeholder="I'm looking for a [role] position in [industry]. I have [X] years of experience in [skills]. I'm passionate about [interests] and looking for opportunities that allow me to [goals]."
              className="w-full max-w-2xl bg-background min-h-56"
            />
          </div>
        </TabsContent>

        <TabsContent
          value="recruiter"
          className="flex justify-center items-center p-16 w-full min-h-screen"
        >
          Welcome recruiter!
        </TabsContent>
      </Tabs>
    </div>
  );
}
