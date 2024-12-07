import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const RoleTabs = () => {
  return (
    <Tabs defaultValue="seeker" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="seeker">Job Seeker</TabsTrigger>
        <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
      </TabsList>
      <TabsContent value="seeker">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="recruiter">Change your password here.</TabsContent>
    </Tabs>
  );
};
