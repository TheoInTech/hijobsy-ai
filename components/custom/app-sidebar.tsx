import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ThreeDotsAnimated } from "@/components/custom";

export function AppSidebar() {
  return (
    <Sidebar className="p-2">
      <SidebarHeader>Your matches</SidebarHeader>
      <SidebarContent className="p-4 h-full">
        <div className="flex flex-col gap-4">
          {/* Sample matching */}
          <div className="flex gap-2 items-center">
            <ThreeDotsAnimated />
            <div className="text-sm font-medium text-foreground/80">
              Web Developer Role
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <ThreeDotsAnimated />
            <div className="text-sm font-medium text-foreground/80">
              Community Builder Role
            </div>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
