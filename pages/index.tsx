import { ssr } from "arnext";
import { useEffect, useState } from "react";

// components
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/custom";
import { ProfileSheet } from "@/components/sections";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundGradient, Button } from "@/components/ui";
import { useStore } from "@/store";
// import { ConnectButton } from "arweave-wallet-kit";

const getDate = async (date) => date ?? Date.now();

export const getStaticProps = ssr(async ({}) => {
  return { props: { _date: Date.now() }, revalidate: 100 };
});

export default function Home({ _date = null }) {
  const [date, setDate] = useState(_date);
  const { setIsProfileCreated } = useStore();

  const handleCreateProfile = () => {
    setIsProfileCreated(true);
  };

  useEffect(() => {
    (async () => _date ?? setDate(await getDate(_date)))();
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="flex fixed top-4 right-4 gap-4">
        {/* <ConnectButton /> */}
        <ThemeToggle />

        {/* Temporay create profile button for demo */}
        <Button variant="outline" onClick={handleCreateProfile}>
          Temporary Create Profile
        </Button>
      </div>

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
          <BackgroundGradient className="relative w-[720px] overflow-hidden min-h-56">
            <ProfileSheet />
            <Textarea
              placeholder="I'm looking for a [role] position in [industry]. I have [X] years of experience in [skills]. I'm passionate about [interests] and looking for opportunities that allow me to [goals]."
              className="w-full rounded-lg bg-background min-h-56"
            />
          </BackgroundGradient>
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
