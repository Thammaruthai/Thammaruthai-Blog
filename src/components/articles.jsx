import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ArticlesSection() {
  return (
    <>
      <div
        className=" flex flex-row w-full bg-[background: #EFEEEB;
] justify-center h-16 items-center "
      >
        <div className="w-11/12">
          <div className="font-semibold text-2xl">Latest articles</div>
        </div>
      </div>

      <div
        className=" flex flex-row w-full bg-[background: #EFEEEB;
] justify-center h-16 "
      >
        <div className="flex flex-row justify-between bg-[#EFEEEB] w-11/12 h-20 items-center min-sm:rounded-2xl px-4 max-sm:w-full max-sm:flex-col items-center max-sm:py-16 max-sm:justify-center max-sm:gap-2 ">
          <div id="tab" className="max-sm:hidden">
            <Tabs defaultValue="Highlight" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-4  rounded-md bg-[#EFEEEB]">
                <TabsTrigger
                  value="Highlight"
                  className="rounded-sm data-[state=active]:bg-[#DAD6D1] data-[state=active]:text-[#43403B] "
                >
                  Highlight
                </TabsTrigger>
                <TabsTrigger
                  value="Cat"
                  className="rounded-sm data-[state=active]:bg-[#DAD6D1]"
                >
                  Cat
                </TabsTrigger>
                <TabsTrigger
                  value="Inspiration"
                  className="rounded-sm data-[state=active]:bg-[#DAD6D1]"
                >
                  Inspiration
                </TabsTrigger>
                <TabsTrigger
                  value="General"
                  className="rounded-sm data-[state=active]:bg-[#DAD6D1]"
                >
                  General
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="relative w-80 max-sm:w-full">
            <Input
              type="text"
              placeholder="Search"
              className="pr-10 bg-white text-[#DAD6D1]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div id="selectMenu" className="sm:hidden w-full text-[#75716B]">
            <div className="text-base">Category</div>
            <Select>
              <SelectTrigger className="w-full  bg-white">
                <SelectValue placeholder="Highlight" />
              </SelectTrigger>
              <SelectContent className=" bg-white">
                <SelectGroup>
                  <SelectItem value="Highlight">Highlight</SelectItem>
                  <SelectItem value="Cat">Cat</SelectItem>
                  <SelectItem value="Inspiration">Inspiration</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
}
