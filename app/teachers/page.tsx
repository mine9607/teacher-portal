"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import CalendarWeek from "@/components/ui/calendar-week";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Teacher() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <header className="flex justify-between">
        <div className="flex">
          <h1 className="mt-4 ml-4 p-2 text-xl border-r-4 border-black text-center items-center">
            Welcome to the Teacher Portal!
          </h1>
          <h2 className="mt-4 p-2 text-xl">User Name</h2>
        </div>
        <div className="flex gap-4 align-middle">
          <Menubar className="mt-4">
            <MenubarMenu>
              <MenubarTrigger>
                <Link href="/">Home</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Reports</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Add Report</MenubarItem>
                <MenubarItem>Update Report</MenubarItem>
                <MenubarItem>Delete Report</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Classes</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Students</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value="benoit">
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Avatar className="mt-4 mr-4 items-center justify-center">
            <AvatarImage src="" />
            <AvatarFallback className="border border-black">CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="m-4 flex gap-4">
        <Calendar mode="single" selected={date} onSelect={setDate} className=" border-2 rounded-2xl w-fit h-fit" />
        <div className=" border border-border rounded-2xl w-screen justify-center items-center ">
          {/* <CalendarWeek /> */}
          <iframe
            className=" p-2 h-[275px] w-full border border-border rounded-lg"
            src="https://calendar.google.com/calendar/embed?src=bminer85%40gmail.com&ctz=America%2FChicago"
            style={{ border: 0 }}
            height="600"
          ></iframe>
        </div>
      </div>
    </>
  );
}
